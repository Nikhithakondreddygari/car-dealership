const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const LoginOTPModel = require('../models/loginOTPModel');
const jwt = require('jsonwebtoken');
const { generateOTP, sendOTPEmail } = require('./otpController');
const { sendMail } = require('./mailer');
const otpStorage = {}; // Temporary in-memory storage for secrets

// Register
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if any required field is missing
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields (username, email, password) are required.' });
    }

    // Check if user with the provided email already exists
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists. Please use a different email.' });
    }

    // Generate a random secret key for the user
    const secret = speakeasy.generateSecret();
    const secretKey = secret.base32;

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record and associate the secret key with the email
    const newUser = await UserModel.create({ username, email, password: hashedPassword, secretKey });

    res.status(201).json({ message: 'User registered successfully', secretKey });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Setup Two-Factor Authentication
exports.setupTwoFactorAuth = async (req, res) => {
  try {
    const { email } = req.query;

    console.log("Email received:", email); // Log the received email

    const user = await UserModel.findOne({ email });

    if (!user) {
      console.log("User not found:", email); // Log if user is not found
      return res.status(404).json({ error: 'User not found' });
    }

    const secret = speakeasy.generateSecret();
    const secretKey = secret.base32;

    otpStorage[email] = secretKey;

    console.log("Generated Secret:", secret); // Log the generated secret

    qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
      if (err) {
        console.error('Error generating QR code:', err); // Log QR code generation errors
        return res.status(500).json({ error: 'Error generating QR code' });
      }
      
      res.send(
        `<h1>Setup Authenticator</h1>
        <h3>Use the QR code to set up your authenticator</h3>
        <img src=${data_url} > <br>
        or add manually: ${secret.base32}`
      );
    });
  } catch (error) {
    console.error('Setup error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Verify Two-Factor Authentication Token
exports.verifyTwoFactorAuth = async (req, res) => {
  try {
    const { userToken, email } = req.body;

    if (!userToken || !email) {
      return res.status(400).json({ error: 'Both token and email are required for verification.' });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found with the provided email.' });
    }

    const secretKey = user.secretKey;

    if (!secretKey) {
      return res.status(404).json({ error: 'No secret key found for the provided email. Please set up two-factor authentication first.' });
    }

    const verified = speakeasy.totp.verify({
      secret: secretKey,
      encoding: 'base32',
      token: userToken,
      window: 1 // Allow a time window of 1 minute
    });

    res.status(200).json({ success: verified });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password, otp } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (otp) {
      const otpRecord = await LoginOTPModel.findOne({ email });
      if (!otpRecord || otpRecord.otp !== otp) {
        return res.status(401).json({ error: 'Invalid OTP' });
      }
      
      await LoginOTPModel.deleteOne({ email });
      const token = jwt.sign({ email: user.email }, "jwt-secret-key", { expiresIn: '1d' });
      res.cookie("token", token);
      return res.status(200).json("Success");
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const otp = generateOTP();
        const otpRecord = new LoginOTPModel({ email: email, password: user.password, otp });
        await otpRecord.save();

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Your OTP for Login',
          text: `Your OTP for login is: ${otp}`,
        };
        console.log(otp);
        await sendMail(mailOptions);
        return res.status(200).json({ message: 'Please enter OTP for verification', otpRequired: true });
      } else {
        return res.status(401).json("The password is incorrect");
      }
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Send OTP for Login
exports.sendLoginOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const otp = generateOTP();
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP for Login',
      text: `Your OTP for login is: ${otp}`,
    };

    await sendMail(mailOptions);
    
    res.status(200).json({ message: 'OTP sent to your email for login verification.' });
  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const otpRecord = await LoginOTPModel.findOne({ email });

    if (!otpRecord || otpRecord.otp !== otp) {
      return res.status(401).json({ error: 'Invalid OTP' });
    }

    await LoginOTPModel.deleteOne({ email });

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const token = jwt.sign({ email: user.email }, process.env.SESSION_SECRET, { expiresIn: '2m' });
    
    res.status(200).json({ message: 'OTP verification successful', token });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Forget Password
exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ status: "User not found" });
    }

    const token = jwt.sign({ id: user._id }, "jwt_secret_key", { expiresIn: "120s" });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Reset your Password',
      text: `http://localhost:3030/api/v1/users/resetPassword/${user._id}/${token}`
    };

    await sendMail(mailOptions);
    console.log(mailOptions);
    
    res.status(200).json({ success: true, message: "Mail sent successfully" });
  } catch (error) {
    console.error('Forget password error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  jwt.verify(token, "jwt_secret_key", async (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    } else {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.findByIdAndUpdate({ _id: id }, { password: hashedPassword });
        res.status(200).json({ success: true, message: "Password reset successfully" });
      } catch (error) {
        console.error('Reset password error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  });
};

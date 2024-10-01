const nodemailer = require('nodemailer');
const expressRateLimit = require('express-rate-limit');

// Generate OTP
exports.generateOTP = (length = 6) => {
  const characters = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return otp;
};

// Send OTP via Email
exports.sendOTPEmail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kondakoushik99@gmail.com',
        pass: 'knuz opxw mneo ornr'
      }
    });

    let info = await transporter.sendMail({
      from: 'kondakoushik99@gmail.com',
      to: email,
      subject: 'Your OTP for Login',
      text: `Your OTP for login is: ${otp}`
    });

    console.log('Email sent: ', info);
    return info;
  } catch (error) {
    console.error('Error sending email: ', error);
    throw error;
  }
};

// Rate Limiting Middleware
exports.limiter = expressRateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 requests per minute
  handler: (req, res) => {
    const currentTime = new Date();
    const resetTime = new Date(currentTime.getTime() + 10 * 60 * 1000); // Add 10 minutes
    res.status(429).json({
      message: 'fail',
      payload: `Too many failed requests. Please try again after 10 minutes at ${resetTime.toLocaleTimeString()}`,
    });
  },
});

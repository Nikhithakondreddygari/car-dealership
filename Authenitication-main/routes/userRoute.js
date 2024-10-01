const express = require('express');
const userController = require('../controllers/userController');
const otpController = require('../controllers/otpController');
const carController = require('../controllers/carController');
const passport = require('../controllers/passport'); 

const router = express.Router();

// Route for signup
router.post('/signup', userController.signup);

// Route to setup two-factor authentication
router.get('/twofactorsetup', userController.setupTwoFactorAuth);

// Route to verify two-factor authentication token
router.post('/verify', userController.verifyTwoFactorAuth);

// Login and OTP routes
router.post('/login', otpController.limiter, userController.login);
router.post('/send-otp', userController.sendLoginOTP); 
router.post('/verify-otp', userController.verifyOtp);

// Password reset routes
router.post('/forget', userController.forgetPassword);
router.post('/resetpassword/:id/:token', userController.resetPassword);

// Rate limiting route example
router.post('/rate-limited-route', otpController.limiter, (req, res) => {
    res.send('This route is rate-limited.');
});

// Car route
router.post('/addCar', carController.addCar);

// Google authentication routes
router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failure' }),
  (req, res) => {
    res.redirect('/success');
  }
);

module.exports = router;


// exports.setupTwoFactorAuth = async (req, res) => {
//   try {
//     const { email } = req.query;

//     console.log("Email received:", email); // Log the received email

//     const user = await UserModel.findOne({ email });

//     if (!user) {
//       console.log("User not found:", email); // Log if user is not found
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const secret = speakeasy.generateSecret();
//     const secretKey = secret.base32;

//     otpStorage[email] = secretKey;

//     console.log("Generated Secret:", secret); // Log the generated secret

//     qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
//       if (err) {
//         console.error('Error generating QR code:', err); // Log QR code generation errors
//         return res.status(500).json({ error: 'Error generating QR code' });
//       }
      
//       res.json({
//         qrCode: data_url,
//         secretBase32: secret.base32
//       });
//     });
//   } catch (error) {
//     console.error('Setup error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
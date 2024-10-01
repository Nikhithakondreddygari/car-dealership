const mongoose = require('mongoose');

const loginOtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  otp: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300 // OTP records expire after 5 minutes (300 seconds)
  }
});

const LoginOTPModel = mongoose.model('LoginOTP', loginOtpSchema);

module.exports = LoginOTPModel;

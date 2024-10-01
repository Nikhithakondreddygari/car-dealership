const mongoose = require('mongoose');

// Define the OTP schema
const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  otp: {
    type: String,
    required: true
  }
});

// Create the OTP model
const OTPModel = mongoose.model('OTP', otpSchema);

// Export the OTP model to be used in other files
module.exports = OTPModel;

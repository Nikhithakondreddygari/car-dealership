const mongoose = require('mongoose');

const googleAuthSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  displayName: { type: String },
  email: { type: String },
  image: { type: String },
  
},{ timestamps: true });

const GoogleAuthModel = mongoose.model('GoogleAuth', googleAuthSchema);

module.exports = GoogleAuthModel;

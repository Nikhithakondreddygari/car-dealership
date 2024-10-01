const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  BrandName: String,
  NumberOfOwners: Number,
  TransmissionType: String,
  RegistrationYear: Number,
  KilometersDriven: Number,
  Price: Number,
  photoUrls:Array
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

const Car = require('../models/carModel');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});

// Function to check if the file is a photo (image)
const isPhoto = (file) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  return allowedTypes.includes(file.mimetype);
};

exports.addCar = async (req, res) => {
  try {
    const { BrandName, NumberOfOwners, TransmissionType, RegistrationYear, KilometersDriven, price } = req.body;
    const files = req.files;

    if (!files || files.length < 2) {
      return res.status(400).json({ error: 'Please upload at least 2 photos' });
    }

    const photoFiles = files.photos.filter(file => isPhoto(file));

    if (photoFiles.length < 2) {
      return res.status(400).json({ error: 'Please upload at least 2 photos' });
    }

    const uploads = [];
    
    for (const file of files.photos) {
      const key = 'cars/' + file.name;

      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: file.data,
      };

      const uploadPromise = s3.upload(params).promise()
        .then(data => {
          return data; // Return the upload result
        })
        .catch(err => {
          console.error('Error uploading:', err);
          throw err; // Rethrow the error to propagate it
        });

      uploads.push(uploadPromise);
    }

    const uploadResults = await Promise.allSettled(uploads);
    
    const photoUrls = uploadResults
      .filter(result => result.status === 'fulfilled' && result.value && result.value.Location)
      .map(result => result.value.Location);

    const newCar = new Car({ BrandName, NumberOfOwners, TransmissionType, RegistrationYear, KilometersDriven, price, photoUrls });

    await newCar.save();

    res.status(201).json({ message: 'Car added successfully', car: newCar });
  } catch (error) {
    console.error('Error adding car:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name:'dxr3ammxi',
  api_key: '719422319229136',
  api_secret: 'n9pAWt3Fgf0dV3rHzh-fZfMeGek'
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'png'],
  params: {
    folder : 'TTCS'
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
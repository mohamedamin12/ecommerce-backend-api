const cloudinary = require("cloudinary");

//* Connect to Cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//* Cloudinary Upload Image

const cloudinaryUploadImage = async (fileUpload) => {
  try {
    const data = await cloudinary.uploader.upload(fileUpload, {
      resource_type: "auto",
    });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error (cloudinary)");
  }
};

//* Cloudinary Remove Image

const cloudinaryRemoveImage = async (imagePublicId) => {
  try {
    const data = await cloudinary.uploader.destroy(imagePublicId);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error (cloudinary)");
  }
};

module.exports = {
  cloudinaryUploadImage,
  cloudinaryRemoveImage,
};
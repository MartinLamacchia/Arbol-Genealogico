const User = require("../../models/user");
const uploadImage = require("../../config/Cloudinary");

const registerUser = async (req, res) => {
  const { email, password, name, lastname, username } = req.body;

  try {
    const result = await uploadImage(req.files.image.tempFilePath);

    console.log(result.secure_url);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = registerUser;

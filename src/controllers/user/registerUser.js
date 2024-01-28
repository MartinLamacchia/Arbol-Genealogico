const User = require("../../models/user");
const uploadImage = require("../../config/Cloudinary");

const registerUser = async (req, res) => {
  const { email, password, name, lastname, username } = req.body;

  try {
    const result = await uploadImage(req.files.image.tempFilePath);

    const userFound = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (userFound) {
      return res
        .status(400)
        .json({ message: "El mail o username ya estan registrados" });
    }

    const newUser = await User.create({
      email,
      password,
      name,
      lastname,
      username,
      image: result.secure_url,
    });

    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = registerUser;

const User = require("../../models/user");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.status(404).json({ message: "El email es incorrecto" });
    }

    const passFound = await bcrypt.compare(password, userFound.password);

    if (!passFound) {
      res.status(404).json({ message: "La contraseña es incorrecta" });
    }

    res.status(200).json({ access: true, userFound });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = loginUser;

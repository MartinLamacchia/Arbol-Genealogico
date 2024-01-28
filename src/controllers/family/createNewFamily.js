const User = require("../../models/user");
const Family = require("../../models/family");
const uploadImage = require("../../config/Cloudinary");

const createNewFamily = async (req, res) => {
  const { name, lastname, relation, id } = req.body;

  try {
    const result = await uploadImage(req.files.image.tempFilePath);

    const newFamily = await Family.create({
      name,
      lastname,
      image: result.secure_url,
      relation,
      familyUser: id,
    });

    await User.findByIdAndUpdate(id, {
      $push: {
        familyMembers: newFamily._id,
      },
    });

    res.status(201).json(newFamily);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = createNewFamily;

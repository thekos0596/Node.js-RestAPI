const asyncHandler = require("express-async-handler");
const path = require("path");
const fs = require("fs/promises");
const { updateUserAvatar } = require("../../services/authService");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = asyncHandler(async (req, res) => {
  const { path: uploadPath, originalname } = req.file;
  const { _id } = req.user;
  const imgName = `${_id}_${originalname}`;

  try {
    const resultUpload = path.join(avatarsDir, imgName);

    const originalAvatar = await Jimp.read(uploadPath);
    originalAvatar.resize(250, 250).write(uploadPath);
    await fs.rename(uploadPath, resultUpload);

    const avatarURL = path.join("public", "avatars", imgName);

    await updateUserAvatar(_id, avatarURL);

    res.status(200).json({ avatarURL });
  } catch (error) {
    await fs.unlink(uploadPath);

    throw error;
  }
});

module.exports = { updateAvatar };

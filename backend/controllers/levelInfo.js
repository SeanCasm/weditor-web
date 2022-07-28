const { response, request } = require("express");
const LevelInfo = require("../models/levelInfo");

const levelInfoPost = async (req = request, res = response) => {
  const levelInfo = new LevelInfo(req.body);
  try {
    const { id } = await levelInfo.save();
    res.json({
      msg: "Level file information correctly uploaded",
      id,
    });
  } catch (err) {
    console.log({ err });
    res.status(401).json({ msg: "Invalid file" });
  }
};

module.exports = {
  levelInfoPost,
};

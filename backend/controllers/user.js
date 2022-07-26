const { response, request } = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");

const userGet = (req = request, res = response) => {
  res.send("get");
};
const userPut = async (req = request, res = response) => {
  const { id } = req.params;
  const { password, google, email, ...other } = req.body;

  if (password) {
    const salt = bcryptjs.genSaltSync(12);
    other.password = bcryptjs.hashSync(password, salt);
  }
  const user = await User.findByIdAndUpdate(id, other);
  res.json({
    msg: "post API - userPost",
    user,
  });
};
const userPost = async (req = request, res = response) => {
  const { username, nickname, password, email } = req.body;
  const user = new User({ username, nickname, email, password });

  const salt = bcryptjs.genSaltSync(12);
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();

  res.json({
    msg: "post API - userPost",
    user,
  });
};
const userDelete = async (req = request, res = response) => {
  const { id } = req.params;
  const { status } = req.body;
  
  try {
    const userDeleted = await User.findByIdAndUpdate(id, status);
    res.json({
      msg: "User status correctly updated",
      userDeleted,
    });
  } catch (err) {
    res.status(400).json({
      msg: "User can't been updated",
    });
  }
};

module.exports = {
  userGet,
  userPost,
  userDelete,
  userPut,
};

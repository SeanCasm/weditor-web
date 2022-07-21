const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validateJWT = async(req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(400).json({
      msg: "Token required in this request",
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRETKEY);
    const user = await User.findById(id);

    if (!user.status) {
      return res.status(401).json({
        msg: "User have status: false"
      });
    }
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      msg: "Invalid token",
    });
  }
};
module.exports = { validateJWT };

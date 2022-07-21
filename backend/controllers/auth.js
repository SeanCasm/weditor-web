const { response, request } = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const { createJWT } = require("../helpers/jwt-helpers");

const login = async (req = request, res = response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "User doesn't exists",
      });
    }

    const status = user.status;
    if (!status) {
      return res.status(400).json({
        msg: `User is no longer available in the basedata.`,
      });
    }
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Password isn't correct, try again.",
      });
    }
    const token = await createJWT(user.id);
    res.json({
      msg: "Login ok",
      user,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "Something happened, please contact with the administrator",
    });
  }
};

const revalidateToken = async (req, res = response) => {
  const user = req.user;
  const token = await createJWT(user.id);
  res.json({
    ok: true,
    user,
    token,
  });
};

module.exports = { login, revalidateToken };

const Role = require("../models/role");
const User = require("../models/user");
const LevelInfo = require("../models/levelInfo");
const Level = require("../models/level");

const validRole = async (role) => {
  const roleExists = await Role.findOne({ role });
  if (!roleExists) {
    throw new Error(`Role ${role} isn't defined`);
  }
};
const levelRatedByUser = async (user, id) => {
  const levelIsRated = await Rating.findOne({ id, user });
  if (levelIsRated) {
    throw new Error("This level have rating by");
  }
};
const levelInfoNameExists = async (levelName) => {
  const levelExists = await LevelInfo.findOne({ levelName });
  if (levelExists) {
    throw new Error("The level name is already in use, try another");
  }
};
const levelNameExists = async (levelName) => {
  const levelExists = await Level.findOne({ levelName });
  if (levelExists) {
    throw new Error("The level name is already in use, try another");
  }
};
const nicknameExists = async (nickname) => {
  const exists = await User.findOne({ nickname });
  if (exists) {
    throw new Error("Nickname already in use.");
  }
};
const emailExists = async (email) => {
  const exists = await User.findOne({ email });
  if (exists) {
    throw new Error("Email already in use");
  }
};

const userExistsById = async (uid) => {
  const exists = await User.findById(uid);
  if (!exists) {
    throw new Error("User doesn't exists");
  }
};
module.exports = {
  validRole,
  emailExists,
  nicknameExists,
  userExistsById,
  levelNameExists,
  levelInfoNameExists,
  levelRatedByUser,
};

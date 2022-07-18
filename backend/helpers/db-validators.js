const Role = require("../models/role");
const User = require("../models/user");

const validRole = async (role) => {
  const roleExists = await Role.findOne({ role });
  if (!roleExists) {
    throw new Error(`Role ${role} isn't defined`);
  }
};

const emailExists = async (email) => {
  const exists = await User.findOne({ email });
  if (exists) {
    throw new Error("Email already exists");
  }
};

const userExistsById = async (id) => {
  const exists = await User.findById(id);
  if (!exists) {
    throw new Error("User doesn't exist");
  }
};
module.exports = {
  validRole,
  emailExists,
  userExistsById,
};

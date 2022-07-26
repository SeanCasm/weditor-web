const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  username: {
    type: String,
    required: [true, "The username is required"],
  },
  nickname: {
    type: String,
    required: [true, "The nickname is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "The email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  img: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "USER",
    emun: ["ADMIN,USER"],
  },
  status: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

module.exports = model("User", UserSchema);

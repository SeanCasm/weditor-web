const { Schema, model } = require("mongoose");

const RoleSchema = Schema({
  role: {
    type: String,
    required: [true, "The user role is required"],
  },
});

module.exports = model("Role", RoleSchema);
const validateJWT = require("./validate-jwt");
const validateRole = require("./validate-role");
const validateFields = require("./validate-fields");

module.exports = {
  ...validateFields,
  ...validateRole,
  ...validateJWT,
};

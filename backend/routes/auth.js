const { Router } = require("express");
const { check } = require("express-validator");
const { login, revalidateToken } = require("../controllers/auth");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

router.post(
  "/login",
  [
    check("email", "The email is required").not().isEmpty(),
    check("password", "The password is required").not().isEmpty(),
    check("email").isEmail(),
    validateFields,
  ],
  login
);
router.get("/renew", validateJWT, revalidateToken);
module.exports = router;

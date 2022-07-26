const { Router } = require("express");
const { check } = require("express-validator");
const { login, revalidateToken } = require("../controllers/auth");
const { validateFields, validateJWT } = require("../middlewares");

const router = Router();

router.post(
  "/login",
  [
    check("email", "The email is required").not().isEmpty(),
    check("password", "The password is required").not().isEmpty(),
    check("password", "Password must be at least 8 characters long").isLength({
      min: 8,
    }),
    check("email").isEmail(),
    validateFields,
  ],
  login
);
router.get("/renew", validateJWT, revalidateToken);
module.exports = router;

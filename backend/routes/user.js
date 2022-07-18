const { Router } = require("express");
const {
  userGet,
  userDelete,
  userPost,
  userPut,
} = require("../controllers/user");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const {
  validRole,
  emailExists,
  userExistsById,
} = require("../helpers/db-validators");
const { validateJWT } = require("../middlewares/validate-jwt");
const { validateRole } = require("../middlewares/validate-role");

const router = Router();

router.get("/", userGet);

router.put(
  "/:id",
  [
    validateJWT,
    validateRole,
    check("id").isMongoId(),
    check("id").notEmpty(),
    validateFields,
  ],
  userDelete
);

router.post(
  "/",
  [
    check("email", "Email isn't  valid").isEmail(),
    check("username", "Username is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
    check("nickname", "Nickname is required").not().isEmpty(),
    check("role").custom(validRole),
    check("email").custom(emailExists),
    validateFields,
  ],
  userPost
);

router.put(
  "/:id",
  [
    check("id", "Not a valid ID").isMongoId(),
    check("id").custom(userExistsById),

    validateFields,
  ],
  userPut
);

module.exports = router;

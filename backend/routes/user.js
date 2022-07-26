const { Router } = require("express");
const {
  userGet,
  userDelete,
  userPut,
  userPost,
} = require("../controllers/user");
const { check } = require("express-validator");
const {
  emailExists,
  userExistsById,
  nicknameExists,
} = require("../helpers/db-validators");
const { validateJWT, validateRole, validateFields } = require("../middlewares");

const router = Router();

router.get("/", userGet);

router.delete(
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
    check("password", "Password must be at least 6 characters long").isLength({
      min: 8,
    }),
    check("nickname", "Nickname is required").not().isEmpty(),
    check("nickname").custom(nicknameExists),
    check("email").custom(emailExists),
    validateFields,
  ],
  userPost
);

router.put(
  "/:id",
  [
    validateJWT,
    check("id", "Not a valid ID").isMongoId(),
    check("id").custom(userExistsById),
    validateFields,
  ],
  userPut
);

module.exports = router;

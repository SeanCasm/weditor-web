const { Router } = require("express");
const {
  commentDelete,
  commentPost,
  commentGet,
} = require("../controllers/comment");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const {
  validRole,
  emailExists,
  userExistsById,
} = require("../helpers/db-validators");

const { validateJWT } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/", commentGet);

router.delete(
  "/:id",
  [
    validateJWT,
    check("id").isMongoId(),
    check("id").notEmpty(),
    validateFields,
  ],
  commentDelete
);

router.post(
  "/",
  [check("content").not().isEmpty(), validateFields],
  commentPost
);

module.exports = router;

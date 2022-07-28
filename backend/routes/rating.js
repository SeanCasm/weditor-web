const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields, validateJWT } = require("../middlewares");
const { levelRatedByUser } = require("../helpers/db-validators");
const router = Router();

router.post(
  "/:id",
  [
    validateJWT,
    check("id").isMongoId(),
    check("rate").notEmpty(),
    check("user").isMongoId(),
    validateFields,
  ],
  levelRatedByUser
);

module.exports = router;

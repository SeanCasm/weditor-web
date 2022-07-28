const { Router } = require("express");
const { levelInfoPost } = require("../controllers/levelInfo");
const { check } = require("express-validator");
const { levelInfoNameExists } = require("../helpers/db-validators");
const { validateFields, validateJWT } = require("../middlewares");

const router = Router();

router.post(
  "/",
  [validateJWT, check("levelName").custom(levelInfoNameExists), validateFields],
  levelInfoPost
);

module.exports = router;

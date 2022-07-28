const { Router } = require("express");
const {
  levelGetFromAll,
  levelPut,
  levelPost,
  levelDelete,
  levelUpdate,
  levelGetByUser,
  getOwnLevel,
} = require("../controllers/level");
const { check } = require("express-validator");
const { validateFields, validateJWT } = require("../middlewares");
const { levelNameExists } = require("../helpers/db-validators");

const router = Router();

router.get("/", levelGetFromAll);

router.get("/:id", [validateJWT, check("id").isMongoId()], levelGetByUser);
router.get("/", validateJWT, getOwnLevel);

router.delete(
  "/:id",
  [
    validateJWT,
    check("id").isMongoId(),
    check("id").notEmpty(),
    validateFields,
  ],
  levelDelete
);

router.patch(
  "/:id",
  [validateJWT, check("id").isMongoId(), validateFields],
  levelUpdate
);

router.post(
  "/",
  [
    validateJWT,
    check("levelName").not().isEmpty(),
    check("levelName").custom(levelNameExists),
    validateFields,
  ],
  levelPost
);

router.put(
  "/:id",
  [
    validateJWT,
    check("id", "Not a valid ID").isMongoId(),
    check("levelName").custom(levelNameExists),
    check("id").notEmpty(),
    validateFields,
  ],
  levelPut
);

module.exports = router;

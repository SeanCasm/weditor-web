const { Schema, model } = require("mongoose");

const LevelInfoSchema = Schema({
  levelSpawnX: {
    type: Number,
    required: true,
  },
  levelSpawnZ: {
    type: Number,
    required: true,
  },
  levelTiles: {
    type: Array,
    required: true,
  },
  levelTilesX: {
    type: Array,
    required: true,
  },
  levelTilesY: {
    type: Array,
    required: true,
  },
  levelSizeX: {
    type: Number,
    required: true,
  },
  levelSizeY: {
    type: Number,
    required: true,
  },
  levelGuns: {
    type: Array,
    required: true,
  },
  difficultTier: {
    type: String,
    required: true,
  },
  level: {
    type: Schema.Types.ObjectId,
    ref: "Level",
    required: true,
  },
});

LevelInfoSchema.methods.toJSON = function () {
  const { __v, ...level } = this.toObject();
  return level;
};

module.exports = model("LevelInfo", LevelInfoSchema);

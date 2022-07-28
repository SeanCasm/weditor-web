const { Schema, model } = require("mongoose");

const LevelSchema = Schema({
  levelName: {
    type: String,
    required: [true, "The levelname is required"],
  },
  img: {
    type: String,
    required: false,
  },
  downloads: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: true,
  },
  description: {
    type: String,
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
  },
  levelInfo: {
    type: Schema.Types.ObjectId,
    ref: "LevelInfo",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Schema.Types.ObjectId,
    ref: "Rating",
  },
});

LevelSchema.methods.toJSON = function () {
  const { __v, ...level } = this.toObject();
  return level;
};

module.exports = model("Level", LevelSchema);

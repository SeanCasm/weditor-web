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
  rating: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

LevelSchema.methods.toJSON = function () {
  const { __v, ...level } = this.toObject();
  return level;
};

module.exports = model("Level", LevelSchema);

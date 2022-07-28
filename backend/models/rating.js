const { Schema, model } = require("mongoose");

const RatingSchema = Schema({
  rate: {
    type: Number,
    required: [true, "Rate is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "An user is required"],
  },
});

RatingSchema.methods.toJSON = function () {
  const { __v, ...rating } = this.toObject();
  return rating;
};

module.exports = model("Rating", RatingSchema);

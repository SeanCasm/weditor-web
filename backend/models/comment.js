const { Schema, model } = require("mongoose");

const CommentSchema = Schema({
  content: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

CommentSchema.methods.toJSON = function () {
  const { __v, ...comment } = this.toObject();
  return comment;
};

module.exports = model("Comment", CommentSchema);

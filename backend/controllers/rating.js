const { response, request } = require("express");
const Rating = require("../models/rating");

const ratingPost = async (req = request, res = response) => {
  const { id } = req.params;
  const { user, rate } = req.body;
  try {
    const levelRating = await Rating.findById(id);
    const rating = await levelRating.save({ user, rate });
    res.json({
      msg: "Level rating have been updated",
      rating,
    });
  } catch (err) {
    console.log({ err });
    res.status(401).json({ msg: "Something wrong" });
  }
};
const ratingUpdate = async (req = request, res = response) => {
}

module.exports = {
  ratingPost,
};

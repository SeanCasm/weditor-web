const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Comment = require("../models/comment");

const commentGet = (req = request, res = response) => {};
const commentPost = async (req = request, res = response) => {};
const commentDelete = async (req = request, res = response) => {};

module.exports = {
  commentDelete,
  commentPost,
  commentGet,
};

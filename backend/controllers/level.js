const { response, request } = require("express");
const Level = require("../models/level");

const levelGetFromAll = async (req = request, res = response) => {
  const { limit = 3, from = 0 } = req.query;
  const query = { status: true };

  const [levels, total] = await Promise.all([
    Level.find(query).skip(Number(from)).limit(Number(limit)),
    Level.countDocuments(query),
  ]);
  res.json({
    levels,
    total,
  });
};

const getOwnLevel = async (req = request, res = response) => {
  const { limit = 3, from = 0 } = req.query;
  const query = { user: req.user.id };
  console.log(query);

  const [levels, total] = await Promise.all([
    Level.find(query).skip(Number(from)).limit(Number(limit)),
    Level.countDocuments(query),
  ]);

  res.json({
    levels,
    total,
  });
};
const levelGetByUser = async (req = request, res = response) => {
  const { id } = req.params;
  const { limit = 3, from = 0 } = req.query;
  const query = { user: id };

  const [levels, total] = await Promise.all([
    Level.find(query).skip(Number(from)).limit(Number(limit)),
    Level.countDocuments(query),
  ]);

  res.json({
    levels,
    total,
  });
};
const levelUpdate = async (req = request, res = response) => {
  const { id } = req.params;
  const { ...content } = req.body;
  try {
    const level = await Level.findByIdAndUpdate(id, content);
    res.json(level);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      msg: "This level doesn't exists ",
    });
  }
};
const levelPut = async (req = request, res = response) => {
  const { id } = req.params;
  const { levelName, description } = req.body;

  const level = await Level.findByIdAndUpdate(id, { levelName, description });

  res.json({
    msg: "post API - levelPost",
    level,
  });
};
const levelPost = async (req = request, res = response) => {
  const { levelName, description } = req.body;
  const level = new Level({
    levelName,
    description,
    user: req.user._id,
  });
  const { id } = await level.save();
  res.json({
    msg: "Upload done",
    levelName,
    id,
  });
};
const levelDelete = async (req = request, res = response) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const levelDeleted = await Level.findByIdAndUpdate(id, status);
    res.json({
      msg: "Level status correctly updated",
      levelDeleted,
    });
  } catch (err) {
    res.status(400).json({
      msg: "Level can't been updated",
    });
  }
};

module.exports = {
  levelGetFromAll,
  levelPut,
  levelPost,
  levelDelete,
  levelUpdate,
  levelGetByUser,
  getOwnLevel,
};

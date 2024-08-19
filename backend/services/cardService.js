const cardModel = require("../models/cardModel");
const AppError = require("../utils/appError");

exports.create = async (title, description) => {
  const newCard = await cardModel.create({
    title,
    description,
  });

  return newCard;
};

exports.getAll = async (search = "") => {
  const cards = await cardModel
    .find({
      title: { $regex: search, $options: "i" },
    })
    .select("-__v")
    .sort({ createdAt: 1 });
  return cards;
};

exports.getByTitle = async (title) => {
  if (!title) {
    throw new AppError("Title is required", 400);
  }

  const card = await cardModel.findOne({ title }).select("-__v");

  if (!card) {
    throw new AppError("No card found with that title", 404);
  }

  return card;
};

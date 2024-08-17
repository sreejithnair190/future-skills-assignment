const { default: mongoose } = require("mongoose");

const cardSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "A card must have a title"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Cards = mongoose.model("Cards", cardSchema);

module.exports = Cards;

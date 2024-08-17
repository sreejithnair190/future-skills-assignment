const express = require("express");
const {
  getCards,
  createCard,
  getCardByTitle,
} = require("../controllers/cardController");
const router = express.Router();

router
    .route("/")
    .get(getCards)
    .post(createCard);

router
    .route("/:title")
    .get(getCardByTitle);

module.exports = router;

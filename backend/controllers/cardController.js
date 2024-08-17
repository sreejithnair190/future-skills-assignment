const { catchAsync, successMessage } = require("../utils");
const cardService = require("../services/cardService");

exports.createCard = catchAsync(async (req, res, next) => {
    const { title, description } = req.body
    const card = await cardService.create(title, description);
    successMessage(res, "Card Created Successfully", 201, card);
});

exports.getCards = catchAsync(async (req, res, next) => {
    const { search } = req.query;
    const cards = await cardService.getAll(search);
    successMessage(res, "Cards Fetched Successfully", 200, cards);
});

exports.getCardByTitle = catchAsync(async (req, res, next) => {
    const { title } = req.params;
    const card = await cardService.getByTitle(title);
    successMessage(res, "Card Fetched Successfully", 200, card);
});
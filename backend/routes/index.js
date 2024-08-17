const { API_URL } = require("../utils/constants");

const rootRouter = require("./rootRouter");
const cardRouter = require("./cardRouter");

exports.initializeRoutes = (app) => {
  app.use(`/`, rootRouter);
  app.use(`${API_URL}/cards`, cardRouter);
};


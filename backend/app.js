const express = require("express");
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");

const { initializeRoutes } = require("./routes");
const globalErrorHandler = require("./middlewares/errorMiddleWare");
const AppError = require("./utils/appError");
const { PORT, MONGODB_URI } = require("./utils/constants");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

initializeRoutes(app);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("DB connection successful"))
  .catch((error) => console.log("DB connection unsuccessful"));

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
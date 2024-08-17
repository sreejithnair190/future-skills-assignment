const { NODE_ENV } = require("../utils/constants");
const AppError = require("../utils/appError")

const handleCastError = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const field = Object.keys(err.keyValue)[0]; 
  const value = err.keyValue[field];
  const message = `Duplicate value for field: ${field}, value: ${value}. Please use another value.`;
  return new AppError(message, 400);
};

const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `${errors.join(". ")}`;
  return new AppError(message, 400);
};

const sendErrDev = (err, res) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: err.status || "error",
    message: err.message || "Something went very wrong",
    //   error:err,
    //   stack: err.stack
  });
};

const sendErrProd = (err, res) => {
  const statusCode = err.statusCode || 500;

  // Send message only if its operational
  if (err.isOperational) {
    res.status(statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error("ERROR :\n", err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }
};

module.exports = (err, req, res, next) => {
  let error = Object.assign(err);
  console.log("error : ", error.message);

  if (NODE_ENV === "development") {

    if (error.name === "CastError") error = handleCastError(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === "ValidationError") error = handleValidationError(error);

    sendErrDev(error, res);
  } else if (NODE_ENV === "production") {
    sendErrProd(error, res);
  }
};

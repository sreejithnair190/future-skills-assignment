exports.successMessage = (
  res,
  message,
  statusCode = 200,
  data = undefined,
) => {
  res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

exports.catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

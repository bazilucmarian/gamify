const notFound = (req, res, next) => {
  const error = new Error(`Not found 😢 Route :  ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, _, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).send({
    message: err.message,
    stack: process.env.NODE_ENV === "PRODUCTION" ? null : err.stack,
  });
};

export { notFound, errorHandler };

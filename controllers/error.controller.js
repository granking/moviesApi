const globalErrorHandler = (err, req, res) => {// pendiente poner el next ya que me da error
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'fail';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack
  });
};

module.exports = { globalErrorHandler };

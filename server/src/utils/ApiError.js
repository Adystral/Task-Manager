class ApiError extends Error {
  constructor (
    statuscode, 
    message = 'Something went wrong', 
    errors = [], 
    stack = "",
  ) {
    super(message);
    this.statusCode = statuscode;
    this.data = null;
    this.message = message;
    this.success = statuscode < 400;
    this.errors = errors;

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError }
/**
 * ApiError Class
 *
 * This class extends JavaScript's built-in Error class to standardize error handling in the API.
 * It adds additional properties and behavior specific to API errors, making debugging and error reporting
 * much easier in a production environment.
 *
 * Inherits from:
 *  - Error: The built-in JavaScript class for handling errors. By extending this class, ApiError can leverage
 *    the built-in error-handling capabilities like stack traces, while adding custom logic specific to our API.
 *
 * Properties:
 *  - statusCode: The HTTP status code for the error (e.g., 400, 404, 500).
 *  - message: A custom error message (default: "Something went wrong"). This overrides the default message from Error.
 *  - success: A boolean flag always set to false, indicating the operation failed.
 *  - errors: An array containing details about specific errors (e.g., validation errors, field-specific issues).
 *  - stack: The stack trace for the error, captured automatically unless a custom stack is provided.
 *
 * Constructor:
 *  - super(message): Passes the custom error message to the base Error class.
 *  - Error.captureStackTrace(this, this.constructor): Captures the stack trace for easier debugging in production.
 *
 * Example Usage:
 *  - When throwing a validation error:
 *    throw new ApiError(400, "Invalid input", [{ field: "email", error: "Invalid format" }]);
 *
 * Why Use a Class Instead of an Object?
 *  - Extensibility: By extending the Error class, we can inherit useful functionality like stack tracing.
 *  - Customization: We can easily add properties like statusCode and errors to provide detailed error information.
 *  - Consistency: All errors follow the same structure, making it easier to handle them uniformly in the API.
 *
 * Benefits of Extending the Error Class:
 *  - Stack traces are automatically captured, making debugging easier.
 *  - The ApiError class can be extended further to create specialized error types if needed.
 */

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

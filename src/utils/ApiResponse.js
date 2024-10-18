/**
 * ApiResponse Class
 *
 * This class is used to standardize the structure of all API responses in the application.
 * By using this class, we ensure that the frontend receives a consistent structure for
 * every response, making it easier to handle responses from the backend.
 *
 * Properties:
 *  - statusCode: The HTTP status code for the response (e.g., 200, 201, 400).
 *  - data: The actual data or payload being returned by the API (e.g., user info, search results).
 *  - message: A message to provide additional context for the client (default: "success").
 *  - success: A boolean flag that indicates whether the request was successful (true if statusCode < 400).
 *
 * Example Usage:
 *  - When returning a success response:
 *    res.status(200).json(new ApiResponse(200, data, "Data fetched successfully"));
 *
 * Why Use a Class Instead of an Object?
 *  - Reusability: We can instantiate this class multiple times with different values.
 *  - Consistency: Every response follows the same structure, making it predictable.
 *  - Encapsulation: Any additional logic for responses can be added here in the future without modifying the entire codebase.
 */
class ApiResponse {
  constructor(statusCode, data, message = "success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

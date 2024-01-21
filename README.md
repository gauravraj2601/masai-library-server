# Masai Library (NEM Basic)

## Overview

This project is the backend implementation for the Masai Library. It provides RESTful API endpoints for managing books, including CRUD operations, search functionality, and error handling. The backend is built using Node.js, Express.js, and MongoDB.
## Documentation
- Deployed on Render. Deployed Backend Link [Masai-Library](https://masai-library-server.onrender.com/)
- API documentation is generated using Swagger. Access the documentation at [Swagger-Api-documentations](https://masai-library-server.onrender.com/apidocs/).


## Table of Contents

- [Setup](#setup)
- [Book Model](#book-model)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Documentation](#documentation)
- [Bonus Features](#bonus-features)

## Setup

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
2. Navigate to the project directory:

   ```bash
   cd masai-library-backend
3. Install dependencies:

   ```bash
   npm install

4. Configure environment variables
5. Run the application:

   ```bash
   npm server
The server will be running at http://localhost:8080.

### Book Model
The Book model is defined with the following properties:

- Title
- Author
- ISBN (International Standard Book Number)
- Description
- Published Date
### API Endpoints
- Create a New Book:
  - Endpoint: POST /masaiLibrary
  - Request Body: JSON with book details
  - Response: Created book details
- Get All Books:
  - Endpoint: GET /masaiLibrary
  - Response: Array of all books
  - 
- Get a Single Book by ID:
  - Endpoint: GET /masaiLibrary/:id
  - Response: Book details
- Search for Books:
  - Endpoint: GET /masaiLibrary/search
  - Query Parameters: title or author
  - Response: Array of matching books
- Update a Book by ID:
  - Endpoint: PUT /masaiLibrary/update/:id
  - Request Body: JSON with updated book details
  - Response: Updated book details
- Delete a Book by ID:
  - Endpoint: DELETE /masaiLibrary/delete/:id
  - Response: Success message
  
## Error Handling
The API handles various scenarios gracefully, providing meaningful error messages for scenarios such as invalid input, not found, and database errors.

## Testing
Unit tests are implemented for each CRUD operation using the Mocha and Chai testing framework. Run tests using:
    
     npm test
   

### Bonus Features
- Pagination:
  = Pagination is implemented in the "Get All Books" endpoint.
- Authentication and Authorization:
  - Authentication is required for certain endpoints (e.g., create/update/delete books).
- ISBN and Date Validation:
  -Validation is added to ensure proper formatting for ISBN numbers and dates.
- Security Measures:
  - Data validation and sanitation are implemented to prevent security issues like SQL injection or NoSQL injection.

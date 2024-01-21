const express= require("express")
const { createBookValidation, createBook, getBooks, getBookByID, searchBooks, updateBook, deleteBook } = require("../controller/book.controller")

const libraryRoute= express.Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      Books:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the book
 *              title:
 *                  type: string
 *                  description: Title of the book
 *              author:
 *                  type: string
 *                  description: Author of the book
 *              isbn:
 *                  type: number
 *                  description: ISBN of the book
 *              description:
 *                  type: string
 *                  description: Description of the book
 *              publishedDate:
 *                  type: string
 *                  description: PublishedDate of the book
 */



/**
 * @swagger
 * /masaiLibrary/search:
 *   get:
 *     summary: Search books by title or author
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: The search query for title or author
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Books"
 *       400:
 *         description: Some server error
 */
libraryRoute.get("/search", searchBooks)

/**
 * @swagger
 * /masaiLibrary:
 *  get:
 *      summary: This will get all the Books from the library
 *      responses:
 *          200:
 *              description: This is the all books
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/Books"
 */
libraryRoute.get("/", getBooks)


/**
 * @swagger
 * /masaiLibrary/addbook:
 *  post:
 *      summary: This will add new Books with details
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: "#/components/schemas/Books"
 *      responses:
 *          200:
 *              description: New book is added
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Books"      
 *          400:
 *              description: Some Server error
 */
libraryRoute.post("/addbook", createBookValidation, createBook)

/**
 * @swagger
 * /masaiLibrary/{id}:
 *  get:
 *      summary: This will get a Books by its ID from the all books in the library
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to retrieve
 *      responses:
 *          200:
 *              description: This is the books
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Books"
 *          400:
 *              description: Some Server error
 */
libraryRoute.get("/:id", getBookByID)


/**
 * @swagger
 * /masaiLibrary/update/{id}:
 *  put:
 *      summary: This will update the Books by ID
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to Update
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: "#/components/schemas/Books"
 *      responses:
 *          200:
 *              description: The book is Updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Books"      
 *          400:
 *              description: Some Server error
 */
libraryRoute.put("/update/:id", createBookValidation, updateBook )

/**
 * @swagger
 * /masaiLibrary/delete/{id}:
 *  delete:
 *      summary: This will remove Books by its ID
 *      parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to delete
 *      responses:
 *          200:
 *              description: The book was deleted
 *          400:
 *              description: Some Server error
 */
libraryRoute.delete("/delete/:id", deleteBook)

module.exports={libraryRoute}

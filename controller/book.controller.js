// validation for createBook

const { check, validationResult } = require("express-validator");
const { Book_Module } = require("../model/book.model");

const createBook= async(req,res)=>{
  const errors= validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array() });
  }
  try {
    const {title, author,isbn, description}= req.body;
    const newBook= new Book_Module({
      title,
      author,
      isbn,
      description,
      publishedDate: new Date()
    });

    const saveBook= await newBook.save();
    res.send(saveBook);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
}
// getAll Book
const getBooks=async(req,res)=>{
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;
    const totalBooks = await Book_Module.countDocuments();
    const totalPages = Math.ceil(totalBooks / limit);

    const AllBooks=await Book_Module.find().skip(skip).limit(limit);
      return res.status(200).json({AllBooks, pageInfo:{currentPage:page,totalPages,totalBooks}})
      
  } catch (error) {
      res.status(400).json({error:error.message})
  }
}

// get Book by ID;
const getBookByID=async(req,res)=>{
  try {
    const book= await Book_Module.findById(req.params.id)
    res.json(book);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

// apply Search
const searchBooks= async(req,res)=>{
  try {
    const { title, author } = req.query;

    const query = {};

    if (title) {
      query.title = { $regex: title, $options: "i" };
    }

    if (author) {
      query.author = { $regex: author, $options: "i" };
    }

    const books = await Book_Module.find(query);
    res.json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update Operator
const updateBook= async (req,res)=>{
  const errors= validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array() });
  }
  try {
    const {title, author, isbn, description, publishedDate}= req.body;
    const id= req.params.id
    console.log(id)
    const updateBook= await Book_Module.findByIdAndUpdate(
      req.params.id,{
      title,
      author,
      isbn,
      description,
      publishedDate
    },
    {new:true}
    );
    res.json(updateBook)
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};

// Delete Operation
const deleteBook= async(req,res)=>{
  try {
    const deleteBook= await Book_Module.findByIdAndDelete(req.params.id);
    res.send({"message":`Book Deleted ${deleteBook.title}`});
  } catch (error) {
    res.status(400).json({error:error.message})
  }
};

const createBookValidation=[
    check('title').notEmpty().withMessage('Title is required'),
    check('author').notEmpty().withMessage('Author is required'),
    check('isbn').notEmpty().withMessage('ISBN is required'),
    check('description').notEmpty().withMessage('Description is required'),
    // check('publishedDate').notEmpty().withMessage('Published date is required'),
  ];

  module.exports={
    getBooks,
    getBookByID,
    updateBook,
    searchBooks,
    deleteBook,
    createBook,
    createBookValidation
  }
const Book =require("../models/books.model");
const asyncHandler = require("express-async-handler")

exports.createBook =asyncHandler(async(req,res)=>{
    const book_name = req.body.book_name;
    const findBook = await Book.findOne({book_name:book_name})
    if(!findBook){
        //create new book
        const newBook = await Book.create(req.body);
        res.json(newBook)

    }
    else{
        //book Already exists
        throw new Error(`The book Already Exists`)
    }
});

//get all books

exports.getaBooks = asyncHandler(async(req,res)=>{
    try {
        const getAllBooks = await Book.find()
        res.json(getAllBooks)
    } catch (error) {
        throw new Error(error)
    }
})

// get a Single Book by Id

exports.getBooksbyId = asyncHandler(async(req,res)=>{
    const{id} = req.params;
    try {
        const getBooks = await Book.findById(id)
        res.json(getBooks)
    } catch (error) {
        throw new Error(error)
    }
})

exports.updateBookById = asyncHandler(async(req,res)=>{
    const{id} = req.params;
    try {
        const updateBook = await Book.findByIdAndUpdate(id,{
            book_name:req?.body?.book_name,
            author_name:req?.body?.author_name,
            email:req?.body?.email,
            description:req?.body?.description
        })
        res.json(updateBook)
    } catch (error) {
        throw new Error(error)
    }
})

exports.deleteBookById = asyncHandler(async(req,res)=>{
    const{id} = req.params;
    try {
        const deletedBooks = await Book.findByIdAndDelete(id)
        res.json(deletedBooks)
    } catch (error) {
        throw new Error(error)
    }
})
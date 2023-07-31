const express =require("express");
const bookRouter = express.Router();
const{ createBook,getaBooks,getBooksbyId,deleteBookById,updateBookById}= require("../controllers/book.controller")
bookRouter.post("/register",createBook)
bookRouter.get("/all",getaBooks)
bookRouter.get("/:id",getBooksbyId)
bookRouter.delete("/:id",deleteBookById)
bookRouter.put("/:id",updateBookById)

module.exports ={bookRouter}
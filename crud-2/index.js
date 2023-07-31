const express = require("express");
const dotenv = require("dotenv").config();
const dBconnected = require("./config/dbConnect")
const bookRouters = require("./routes/book.route")
const {notFound,errorHandler} = require("./middleware/errorhandling")
const PORT = process.env.PORT||4000;
dBconnected.dBconnect()
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//error handler Middleware
app.use('/api/book',bookRouters.bookRouter)

app.use(notFound)
app.use(errorHandler)
app.listen(PORT,(err)=>{
    console.log(`Server Running on ${PORT}`);
})
const mongoose = require('mongoose'); // Erase if already required
// Declare the Schema of the Mongo model
var bookSchema = new mongoose.Schema({
    book_name:{
        type:String,
        required:true,
        // unique:true,
        index:true,
    },
    author_name:{
        type:String,
        required:true,
        // unique:true,
        index:true,
    },
    email:{
        type:String,
        // required:true,
        // unique:true,
    },
    description:{
        type:String,
        required:true,
        // unique:true,
    },

},{ timestamps: {} });

//Export the model
module.exports = mongoose.model('books', bookSchema);
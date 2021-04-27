var mongoose = require('mongoose');


// This the model of a Book on MongoDB
var bookchema = new mongoose.Schema({ 
    title: String,
    year: String,
    publisher: String,
   Author: String,
    price: Number 
});

// Exporting the Book Model
module.exports = mongoose.model('Book', bookSchema);
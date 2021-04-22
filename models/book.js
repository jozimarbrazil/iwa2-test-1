var mongoose = require('mongoose');

var bookchema = new mongoose.Schema({ 
    title: String,
    year: String,
    publisher: String,
    genre: [String],
   Author: String,
    price: Number 
});

module.exports = mongoose.model('Book', bookSchema);
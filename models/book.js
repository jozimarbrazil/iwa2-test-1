var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({ 
    title: String,
    year: String,
    author: String,
    price: Number 
});

module.exports = mongoose.model('Book', bookSchema);
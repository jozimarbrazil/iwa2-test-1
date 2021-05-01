//code written based on Mikhail's code given in class

//create a new Mongo schema object
var Book = require('./models/book');

// CRUD function

exports.createBook = function(req, res) { 
    var newbook = new Book(req.body);
    newBook.save(function (err, book) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.json(book); 
});
};

exports.getBooks = function(req, res) {
 Book.find({}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(books);
  }); 
};

exports.getBook = function(req, res) {
  Book.findOne({_id: req.params.id}, function (err, books) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(books);
  }); 
};

exports.updateBook = function(req, res) {
  Book.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, books) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(books);
  }); 
};

exports.deleteBook = function(req, res) {
 Book.findByIdAndRemove(req.params.id, function (err, books) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(books);
  }); 
};
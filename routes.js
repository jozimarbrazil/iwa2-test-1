// Code written  based on Mikhail Timofeev lecturers at CCT Dublin 
// Creating a express api
var express = require('express'),
    // Define router as express routes
    router = express.Router(),
    // Storing book-controller inside of a varible
    bookCtrl = require('./book-controller');

router.get('/', function(req, res) {
    res.render('index');
});
////Defining the routes to create, read, update and delete
//Each of them will have a different function (functions are stored on book-controller)
//routes to get all movies, get movie by id, add a new movie, update by id and delete by id 
router.post('/books', bookCtrl.createBook);
router.get('/books',bookCtrl.getBooks);
router.get('/books/:id', bookCtrl.getBook);
router.delete('/books/:id', bookCtrl.deleteBook);
router.put('/books/:id', bookCtrl.updateBook);

// Exporting the routes
module.exports = router;
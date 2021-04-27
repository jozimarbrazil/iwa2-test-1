
//code written by Mikhail in class, 
//and adapted to suit my project

// Creating a express api
const express = require('express'),
// Define router as express routes
router = express.Router();


 // Storing book-controller inside of a varible
bookCtrl = require('./book-controller');

router.get('/', function(req, res) {
    res.render('index');
});

//Defining the routes to create, read, update and delete
//Each of them will have a different function (functions are stored on book-controller)

router.post('/books', bookCtrl.createBook);
router.get('/books',bookCtrl.getBook);
router.get('/books/:id', bookCtrl.getBook);
router.put('/books/:id', bookCtrl.updateBook);
router.delete('/books/:id', bookCtrl.deleteBook);

module.exports.UPLOAD_PATH = "uploads";

var multer = require("multer");
var upload = multer({ dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

// Exporting the routes
module.exports = router;
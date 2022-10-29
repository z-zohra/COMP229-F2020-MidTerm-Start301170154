// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    //  book.find( (err, books) => {
    //   if (err) {
    //     return console.error(err);
    //   }
    //   }

    res.render('books/details',{
      title: "Add a Book",
      books:''
    });
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {
    console.log("data req", req);
    console.log("data res", res);
     book.create({
      Title:req.body.title,
      Description:"",
      Price:req.body.price,
      Author:req.body.author,
      Genre:req.body.genre 
    });
    res.redirect('/books'); 

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {
     book.findById(req.params.id,function (err,bookData){
      res.render('books/details',{
        title:" Edit " + bookData.Title,
        books:bookData 
      });
    });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {
     book.findByIdAndUpdate({
      "_id":req.params.id
      },
      {
        Title:req.body.title,
        Description:"",
        Price:req.body.price,
        Author:req.body.author,
        Genre:req.body.genre
      },function(){
        res.redirect('/books');
      });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
     book.findByIdAndDelete({
      _id:req.params.id
    },function(){
      res.redirect('/books');
    });
});


module.exports = router;

/*    File Name: books.js
      Author: Kody Reid
      Student Number: 301164732
      Application Name: COMP229-M2021-MidTerm-301164732
      Date: June 22, 2021
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let Book = require('../models/books');


//DISPLAYING LIST PAGE


/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  Book.find((err, books) => {
    if (err) 
    {
      return console.error(err);
    }
    else
    {
      res.render('books/index', {title: 'Books', books: books});
    }
  });
});


//ADD PAGE FUNCTIONS


//  GET the Book Details page in order to add a new Book
router.get('/details/', (req, res, next) => {  
  res.render('books/details', { title: 'Add a Book', book: ''});
  /*****************
   * ADD CODE HERE *
   *****************/

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/details', (req, res, next) => {
    
     let newBook = Book({
      "Title": req.body.Title,
      "Description": req.body.Description,
      "Price": req.body.Price,
      "Author": req.body.Author,
      "Genre": req.body.Genre

     });

     Book.create(newBook, (err, Book) => {
       if(err)
       {
         console.log(err);
         res.end(err);
       }
       else
       {
         res.redirect('/books');
       }
     });
}); 


//EDIT PAGE FUNCTIONS


// GET the Book Details page in order to edit an existing Book
router.get('/details/:id', (req, res, next) => {
    /*****************
     * ADD CODE HERE *
     *****************/
     let id = req.params.id;

     Book.findById(id, (err, bookToEdit) => 
     {
         if(err)
         {
             console.log(err);
             res.end(err);
         }
         else
         {
             res.render('books/details', {title: 'Edit Book', book: bookToEdit});
         }
     });
});

// POST - process the information passed from the details form and update the document

router.post('/details/:id', (req, res, next) => {
  let id = req.params.id
    /*****************
     * ADD CODE HERE *
     *****************/
     let updatedBook = Book({
       "_id": id,
      "Title": req.body.Title,
      "Description": req.body.Description,
      "Price": req.body.Price,
      "Author": req.body.Author,
      "Genre": req.body.Genre

     });

     Book.updateOne({_id: id}, updatedBook, (err) => {
       if(err)
       {
         console.log(err);
         res.end(err);
       }
       else
       {
         res.redirect('/books')
       }
     });
});


// DELETE FUNCTION


// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     let id = req.params.id;

     Book.remove({_id: id}, (err) => {
         if(err)
         {
             console.log(err);
             res.end(err);
         }
         else
         {             
             res.redirect('/books');
         } 
     });
});


module.exports = router;

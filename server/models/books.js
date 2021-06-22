/*    File Name: books.js
      Author: Kody Reid
      Student Number: 301164732
      Application Name: COMP229-M2021-MidTerm-301164732
      Date: June 22, 2021
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);

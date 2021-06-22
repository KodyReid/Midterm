/*    File Name: index.js
      Author: Kody Reid
      Student Number: 301164732
      Application Name: COMP229-M2021-MidTerm-301164732
      Date: June 22, 2021
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
//let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;

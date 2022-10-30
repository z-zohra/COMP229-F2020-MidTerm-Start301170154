/*
File name: books.js
 Author's name: Zohra, 
 StudentID: 301170154, and 
 Web App name: Favourite Books
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

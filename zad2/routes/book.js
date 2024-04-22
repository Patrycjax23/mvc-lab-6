const express = require('express');
const bookController = require('../controllers/book');
const router = express.Router();
router.get('/', bookController.getBooksList);
module.exports = router;
class Book {
    constructor(id, title,author,year,available) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year=year;
        this.available=true;
    }


    static getAll() {
        return Book;
    }
}
const books = [
    new Book(1,t1,a1,2000,true),
    new Book(2,t2,a2,2000,true),
    new Book(3,t3,a3,2000,true),
    new Book(4,t4,a4,2000,true),
    new Book(5,t5,a5,2000,true),
]
module.exports = Book;

const express = require('express');
const router = express.Router();

// Hardcoded books data
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Genre 1', description: 'Description 1', year: 2020 },
    { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Genre 2', description: 'Description 2', year: 2021 }
];

// Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// Create a new book
router.post('/', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        description: req.body.description,
        year: req.body.year
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

module.exports = router;

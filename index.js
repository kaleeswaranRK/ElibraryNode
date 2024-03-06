const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware
const booksRouter = require('./books');

const app = express();
app.use(bodyParser.json());

// Enable CORS for all requests
app.use(cors({
    origin: '*',
    credentials: true
}));

// Routes
app.use('/books', booksRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

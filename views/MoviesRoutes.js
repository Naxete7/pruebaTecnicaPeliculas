const express = require('express');
const router = express.Router();

const MoviesControllers = require('../controllers/MoviesControllers.js')

// Todas las pelis
router.get('/', MoviesControllers.getAll);

// // Pelis mas votadas
router.get('/rank/:rank', MoviesControllers.getTopRated);

// Pelis por ID
router.get('/:id', MoviesControllers.getById);

// Pelis por título
router.get('/title/:title', MoviesControllers.getByTitle);

// Pelis por género
router.get('/genre/:genre', MoviesControllers.getByGenre);

module.exports = router;
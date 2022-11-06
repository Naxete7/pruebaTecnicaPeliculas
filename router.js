const express = require('express');
const router = express.Router();

const MoviesRoutes = require('./views/MoviesRoutes');
const SeriesRoutes = require('./views/SeriesRoutes');
const UsuarioRoutes = require('./views/UsuarioRoutes');




router.use('/movies', MoviesRoutes);
router.use('/series', SeriesRoutes);
router.use('/usuario', UsuarioRoutes);

module.exports = router;
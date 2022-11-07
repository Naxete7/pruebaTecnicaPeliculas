const express = require('express');
const router = express.Router();


// const UsuarioRoutes = require('./views/usuarioRoutes');
// const moviesRoutes = require('./views/moviesRoutes');
// const seriesRoutes = require('./views/seriesRoutes');

// middleware
// router.use('/usuarios', UsuarioRoutes);
// router.use('/movies', moviesRoutes);
// router.use('/series', seriesRoutes);

const MoviesRoutes = require('./views/MoviesRoutes');
const SeriesRoutes = require('./views/SeriesRoutes');
const UsuarioRoutes = require('./views/UsuarioRoutes');





router.use('/movies', MoviesRoutes);
router.use('/series', SeriesRoutes);
router.use('/usuario', UsuarioRoutes);

module.exports = router;
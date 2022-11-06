const MoviesControllers = {};
const { Op } = require('sequelize');
const models = require('../models/index');

// Todas las películas
MoviesControllers.getAll = async(req, res) => {
        let resp = await models.movies.findAll();
        res.send(resp);
    }
    // Películas Top Rated
MoviesControllers.getTopRated = async(req, res) => {
    let resp = await models.movies.findAll({
        where: {
            rank: {
                [Op.gt]: 7,
            }
        }
    })
    res.send(resp);
}

// Películas por ID
MoviesControllers.getById = async(req, res) => {
    let id = req.params.id;
    let resp = await models.movies.findAll({
        where: { id_movies: id }
    })
    res.send(resp);
};
// Películas por título
MoviesControllers.getByTitle = async(req, res) => {
    let title = req.params.title;
    let resp = await models.movies.findAll({
        where: { title: title }
    })
    res.send(resp);
};
// Películas por género
MoviesControllers.getByGenre = async(req, res) => {
    let genre = req.params.genre;
    let resp = await models.movies.findAll({
        where: { genre: genre }
    })
    res.send(resp);
};

module.exports = MoviesControllers;
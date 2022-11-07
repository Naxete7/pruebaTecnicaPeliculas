const SeriesControllers = {};
const { Op, Sequelize } = require('sequelize');
const models = require('../models/index');
const sequelize = require('../db/db')


// Todas las series
SeriesControllers.getAll = async(req, res) => {
    let resp = await models.series.findAll();
    res.send(resp);
}

// Series Mejor valoradas
SeriesControllers.getTopRated = async(req, res) => {
    let resp = await models.series.findAll({
        where: {
            rank: {
                [Op.gt]: 7,
            }
        }
    })
    res.send(resp);
};

// Series por ID
SeriesControllers.getById = async(req, res) => {
    let id = req.params.id;
    let resp = await models.series.findAll({
        where: { id_series: id }
    })
    res.send(resp);
};
// Series por título
SeriesControllers.getByTitle = async(req, res) => {
    let title = req.params.title;
    let resp = await models.series.findAll({
        where: { title: title }
    })
    res.send(resp);
};
// Series con capítulo en próximos 7 días
SeriesControllers.getByDate = async(req, res) => {
    let resp = await models.series.findAll({
        where: { episode_7_days: true }
    })
    res.send(resp);
};

// Series en teatros
SeriesControllers.getByTheater = async(req, res) => {
    let resp = await models.series.findAll({
        where: {
            theater: true
        }
    })
    res.send(resp);
}

// Series en cine
SeriesControllers.getByCinema = async(req, res) => {
    let resp = await models.series.findAll({
        where: {
            cinema: true
        }
    })
    res.send(resp);
}





module.exports = SeriesControllers
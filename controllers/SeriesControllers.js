// const SeriesControllers = {};
// const { Op, Sequelize } = require('sequelize');
// const models = require('../models/index');
// const sequelize = require('../db/db')


// // Todas las series
// SeriesControllers.getAll = async(req, res) => {
//     let resp = await models.Series.findAll();
//     res.send(resp);
// }

// // Series Top Rated
// // SeriesControllers.getTopRated = async(req, res) => {
// //     let resp = await models.Series.findAll({
// //         where: {
// //             vote_average: {
// //                 [Op.gt]: 7,
// //             }
// //         }
// //     })
// //     res.send(resp);
// // };

// // Series por ID
// SeriesControllers.getById = async(req, res) => {
//     let id = req.params.id;
//     let resp = await models.Series.findAll({
//         where: { id_series: id }
//     })
//     res.send(resp);
// };
// // Series por título
// SeriesControllers.getByTitle = async(req, res) => {
//     let title = req.params.title;
//     let resp = await models.Series.findAll({
//         where: { title: title }
//     })
//     res.send(resp);
// };
// // Series con capítulo en próximos 7 días
// // SeriesControllers.getByDate = async(req, res) => {
// //     let resp = await sequelize.query("SELECT * FROM railway.Shows where next_episode BETWEEN (CURDATE()) and (CURDATE() + INTERVAL 7 DAY)");
// //     res.send(resp);
// // };

// // Series en cines
// // ShowsControllers.getByTheater = async(req, res) => {
// //     let resp = await models.Series.findAll({
// //         where: {
// //             on_theaters: true
// //         }
// //     })
// //     res.send(resp);
// // }





// module.exports = SeriesControllers
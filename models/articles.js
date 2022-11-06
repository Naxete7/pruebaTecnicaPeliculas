'use strict';
const {
    Model
} = require('sequelize');
const usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
    class articles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            articles.hasOne(models.series)
            articles.hasOne(models.movies)
            articles.belongsToMany(models.rent, { through: 'rentarticles', foreignKey: 'id_articles' })
        }
    }
    articles.init({
        id_articles: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },

    }, {
        sequelize,
        modelName: 'articles',
    });
    return articles;
};
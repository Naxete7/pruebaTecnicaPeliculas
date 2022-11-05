'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class movies extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            movies.belongsTo(models.articles);

        }
    }
    movies.init({
        id_movies: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            },
            genre: DataTypes.STRING,
            date: DataTypes.DATE,
            poster: {
                type: DataTypes.STRING,
                len: [1, 300],
            },
            rank: DataTypes.INTEGER
        },
        id_articles: {
            type: DataTypes.INTEGER,
            references: {
                model: 'article',
                key: 'id_article'
            },
        },
    }, {
        sequelize,
        modelName: 'movies',
    });
    return movies;
};
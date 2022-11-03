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
            // define association here
            movies.belongsTo(models.article)
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
                len: [1, 50]
            },
            genre: DataTypes.STRING,
            date: DataTypes.DATE,
            rank: DataTypes.INTEGER
        },
    }, {
        sequelize,
        modelName: 'movies',
    });
    return movies;
};
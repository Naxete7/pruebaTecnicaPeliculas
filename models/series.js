'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class series extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            series.belongsTo(models.articles);
        }
    }
    series.init({
        id_series: {
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
            date: DataTypes.DATE,
            espisode_7_days: DataTypes.BOOLEAN,
            episodes: DataTypes.INTEGER,
            seasons: DataTypes.INTEGER,
            rank: DataTypes.FLOAT,
            cinema: DataTypes.BOOLEAN,
            theater: DataTypes.BOOLEAN
        },
        id_articles: {
            type: DataTypes.INTEGER,
            references: {
                model: 'articles',
                key: 'id_articles'
            },
        },
    }, {
        sequelize,
        modelName: 'series',
    });
    return series;
};
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class rentarticles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.articles.belongsToMany(models.rent, { through: 'Rentarticles' });
            models.rent.belongsToMany(models.articles, { through: 'Rentarticles' });
        }
    }
    rentarticles.init({
        id_rent: DataTypes.INTEGER,
        id_articles: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'rentarticles',
    });
    return rentarticles;
};
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class article extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            article.hasOne(models.series)
            article.hasOne(models.movies)
            article.belongsToMany(models.rent, { through: 'article_rent', foreignKey: 'id_rent' })
        }
    }
    article.init({
        id_article: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        }
    }, {
        sequelize,
        modelName: 'id_article',
    });
    return article;
};
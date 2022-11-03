'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class rent extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    rent.init({
        id_rent: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,

        },
        id_usuario: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id_user'
            }
        },
    }, {
        sequelize,
        modelName: 'rent',
    });
    return rent;
};
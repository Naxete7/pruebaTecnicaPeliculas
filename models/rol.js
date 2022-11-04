'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class rol extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            rol.hasMany(models.usuario)
        }
    }
    rol.init({
        id_rol: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        tipo: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 50]
            }
        }
    }, {
        sequelize,
        modelName: 'rol',
    });
    return rol;
};
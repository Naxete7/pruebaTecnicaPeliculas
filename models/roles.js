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
            // define association here
            rol.hasMany(models.usuario)
        }
    }
    rol.init({
        id_rol: DataTypes.INTEGER,
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'rol',
        freezeTableName: true,
        timestamps: false
    });
    return rol;
};
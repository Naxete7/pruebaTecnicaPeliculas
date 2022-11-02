const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Rol extends Model {}

Rol.init({
    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    rol_name: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'roles',
    freezeTableName: true,
    timestamps: false
});

module.exports = Rol
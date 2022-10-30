const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Usuario extends Model {}

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 45]
        }
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 45]
        }
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
    },

})

module.exports = Usuario
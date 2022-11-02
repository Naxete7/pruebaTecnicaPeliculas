const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Serie extends Model {}

Serie.init({
    id_serie: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
    },
    duracion: {
        type: DataTypes.TIME,
        allowNull: false
    },
    temporadas: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    fechaEstreno: {
        type: DataTypes.DATE,
        allowNull: false
    }

})

module.exports = Serie
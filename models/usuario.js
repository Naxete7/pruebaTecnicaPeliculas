'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class usuario extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            usuario.belongsTo(models.rol);
            usuario.hasMany(models.rent);
        }
    }
    usuario.init({
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        apellido: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,



        id_rol: {
            type: DataTypes.INTEGER,
            references: {
                model: 'rol',
                key: 'id_rol'
            },
        },
    }, {
        sequelize,
        modelName: 'usuario',
        timestamps: false
    });
    return usuario;
};
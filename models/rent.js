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
            rent.belongsToMany(models.articles, { through: 'rentarticles', foreignKey: 'id_rent' })
            rent.belongsTo(models.usuario);

        }
    }
    rent.init({
        id_rent: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        date_: DataTypes.DATE,

        usuarioIdUsuario: {
            type: DataTypes.INTEGER,

            references: {
                model: 'usuario',
                key: 'id_usuario'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'

        }
    }, {
        sequelize,
        modelName: 'rent',
    });
    return rent;
};
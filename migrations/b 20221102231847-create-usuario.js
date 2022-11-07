'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('usuarios', {
            id_usuario: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING
            },
            apellido: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            id_rol: {
                type: Sequelize.STRING,
                references: {
                    model: 'rols',
                    key: 'id_rol'
                },

            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('usuario');
    }
};
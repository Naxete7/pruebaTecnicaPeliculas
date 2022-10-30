'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('usuario', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            nombre: Sequelize.STRING,
            apellido: Sequelize.STRING,
            edad: Sequelize.INTEGER,
            email: Sequelize.STRING,
            contrasena: Sequelize.STRING
        });

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
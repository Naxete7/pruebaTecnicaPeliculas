'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pelicula', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            titulo: Sequelize.STRING,
            genero: Sequelize.STRING,
            duracion: Sequelize.TIME,
            temporadas: Sequelize.INTEGER,
            fechaEstreno: Sequelize.DATE
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
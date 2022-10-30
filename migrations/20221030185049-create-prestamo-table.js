'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('prestamo', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            foto: Sequelize.STRING,
            sexo: Sequelize.ENUM('Hombre', 'Mujer', 'Otro'),
            fecha_nacimiento: Sequelize.DATEONLY,
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
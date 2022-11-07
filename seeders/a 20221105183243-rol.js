'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('rols', [{
                id_rol: "administrador"
            },
            { id_rol: "usuario" }
        ], {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('rols', null, {});

    }
};
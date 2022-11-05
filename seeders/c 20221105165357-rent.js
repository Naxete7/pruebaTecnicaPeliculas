'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('rent', [{
            id_rent: 1,
            date: "2022-11-5",
            id_usuario: 1
        }], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('rent', null, {});

    }
};
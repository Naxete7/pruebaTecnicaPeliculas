'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Rentarticles', [{
            id_rent: 1,
            id_articles: 1
        }], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Rentarticles', null, {});

    }
};
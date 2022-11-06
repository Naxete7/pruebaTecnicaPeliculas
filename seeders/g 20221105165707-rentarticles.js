'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('rentarticles', [{
                id_rent: 1,
                id_articles: 50
            },
            {
                id_rent: 2,
                id_articles: 14
            }, {
                id_rent: 3,
                id_articles: 7
            },
            {
                id_rent: 4,
                id_articles: 17
            },
            {
                id_rent: 5,
                id_articles: 18
            },
            {
                id_rent: 6,
                id_articles: 16
            },
            {
                id_rent: 7,
                id_articles: 15
            },
            {
                id_rent: 8,
                id_articles: 4
            },
            {
                id_rent: 9,
                id_articles: 3
            },
            {
                id_rent: 10,
                id_articles: 2
            },
            {
                id_rent: 11,
                id_articles: 1
            },
            {
                id_rent: 12,
                id_articles: 31
            },
            {
                id_rent: 13,
                id_articles: 26
            },
            {
                id_rent: 14,
                id_articles: 57
            },
            {
                id_rent: 15,
                id_articles: 48
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('rentarticles', null, {});

    }
};
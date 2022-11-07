'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('articles', [{
                id_articles: 1
            },
            {
                id_articles: 2
            },
            {
                id_articles: 3
            },
            {
                id_articles: 4
            },
            {
                id_articles: 5
            },
            {
                id_articles: 6
            },
            {
                id_articles: 7
            },
            {
                id_articles: 8
            },
            {
                id_articles: 9
            },
            {
                id_articles: 10
            },
            {
                id_articles: 11
            },
            {
                id_articles: 12
            },
            {
                id_articles: 13
            },
            {
                id_articles: 14
            },
            {
                id_articles: 15
            },
            {
                id_articles: 16
            },
            {
                id_articles: 17
            },
            {
                id_articles: 18
            },
            {
                id_articles: 19
            },
            {
                id_articles: 20
            },
            {
                id_articles: 21
            },
            {
                id_articles: 22
            },
            {
                id_articles: 23
            },
            {
                id_articles: 24
            },
            {
                id_articles: 25
            },
            {
                id_articles: 26
            },
            {
                id_articles: 27
            },
            {
                id_articles: 28
            },
            {
                id_articles: 29
            },
            {
                id_articles: 30
            },
            {
                id_articles: 31
            },
            {
                id_articles: 32
            },
            {
                id_articles: 33
            },
            {
                id_articles: 34
            },
            {
                id_articles: 35
            },
            {
                id_articles: 36
            },
            {
                id_articles: 37
            },
            {
                id_articles: 38
            },
            {
                id_articles: 39
            },
            {
                id_articles: 40
            },
            {
                id_articles: 41
            },
            {
                id_articles: 42
            },
            {
                id_articles: 43
            },
            {
                id_articles: 44
            },
            {
                id_articles: 45
            },
            {
                id_articles: 46
            },
            {
                id_articles: 47
            },
            {
                id_articles: 48
            },
            {
                id_articles: 49
            },
            {
                id_articles: 50
            },
            {
                id_articles: 51
            },
            {
                id_articles: 52
            },
            {
                id_articles: 53
            },
            {
                id_articles: 54
            },
            {
                id_articles: 55
            },
            {
                id_articles: 56
            },
            {
                id_articles: 57
            },
            {
                id_articles: 58
            },
            {
                id_articles: 59
            },
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('articles', null, {});

    }
};
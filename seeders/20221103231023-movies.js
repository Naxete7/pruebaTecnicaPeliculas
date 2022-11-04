'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('movies', [{
                id_movie: 1,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 1
            },
            {
                id_movie: 2,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 3
            },
            {
                id_movie: 3,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 5
            },
            {
                id_movie: 4,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 7
            },
            {
                id_movie: 5,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 9
            },
            {
                id_movie: 6,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 11
            },
            {
                id_movie: 7,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 13
            },
            {
                id_movie: 8,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 15
            },
            {
                id_movie: 9,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 17
            },
            {
                id_movie: 10,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 19
            },
            {
                id_movie: 11,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 21
            },
            {
                id_movie: 12,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 22
            },
            {
                id_movie: 13,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 23
            },
            {
                id_movie: 14,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 25
            },
            {
                id_movie: 15,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 27
            },
            {
                id_movie: 16,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 29
            },
            {
                id_movie: 17,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 31
            },
            {
                id_movie: 18,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 33
            },
            {
                id_movie: 18,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 35
            },
            {
                id_movie: 19,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 37
            },
            {
                id_movie: 20,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 39
            },
            {
                id_movie: 21,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 41
            },
            {
                id_movie: 22,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 43
            },
            {
                id_movie: 23,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 45
            },
            {
                id_movie: 24,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 47
            },
            {
                id_movie: 25,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 49
            },
            {
                id_movie: 26,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 51
            },
            {
                id_movie: 27,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 53
            },
            {
                id_movie: 28,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 55
            },
            {
                id_movie: 29,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 57
            },
            {
                id_movie: 30,
                title: 'John Doe',
                genre: false,
                date: 12 - 25 - 2002,
                rank: 25,
                id_article: 58
            },





        ], {});

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
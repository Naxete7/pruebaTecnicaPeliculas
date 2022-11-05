'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('movies', {
            id_movies: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: Sequelize.STRING
            },
            genre: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.DATE
            },
            poster: {
                type: Sequelize.STRING,
            },
            rank: {
                type: Sequelize.INTEGER
            },
            id_articles: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'article',
                    key: 'id_article'
                },

            },

        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('movies');
    }
};
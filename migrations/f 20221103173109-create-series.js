'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('series', {
            id_series: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.DATE
            },
            episode_7_days: {
                type: Sequelize.BOOLEAN
            },
            episodes: {
                type: Sequelize.INTEGER
            },
            seasons: {
                type: Sequelize.INTEGER
            },
            poster: {
                type: Sequelize.STRING,
            },
            rank: {
                type: Sequelize.FLOAT
            },
            cinema: {
                type: Sequelize.BOOLEAN
            },
            theater: {
                type: Sequelize.BOOLEAN
            },
            id_articles: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'articles',
                    key: 'id_articles'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },

        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('series');
    }
};
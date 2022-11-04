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
            espisode_7_days: {
                type: Sequelize.BOOLEAN
            },
            episodes: {
                type: Sequelize.INTEGER
            },
            seasons: {
                type: Sequelize.INTEGER
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
                    model: 'article',
                    key: 'id_article'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('series');
    }
};
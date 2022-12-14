'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('rentarticles', {

            id_rent: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'rent',
                    key: 'id_rent'
                }
            },
            id_articles: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'articles',
                    key: 'id_articles'
                }
            },

        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('rentarticles');
    }
};
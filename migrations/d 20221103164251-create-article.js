'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('articles', {
            id_articles: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true

            },

        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('articles');
    }
};
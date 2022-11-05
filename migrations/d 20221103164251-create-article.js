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
            id_rent: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rent',
                    key: 'id_rent'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            },


        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('articles');
    }
};
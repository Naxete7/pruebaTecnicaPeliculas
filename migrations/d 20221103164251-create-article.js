'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('article', {
            id_article: {
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
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            // },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('article');
    }
};
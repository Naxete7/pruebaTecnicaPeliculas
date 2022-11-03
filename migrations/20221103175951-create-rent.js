'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('rents', {
            id_rent: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.DATE
            },
            id_usuario: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'usuario',
                    key: 'id_usuario'
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
        await queryInterface.dropTable('rents');
    }
};
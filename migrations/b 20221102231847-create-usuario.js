'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
<<<<<<< HEAD:migrations/20221102231847-create-usuario.js
        await queryInterface.createTable('usuarios', {
            id_usuario: {
=======
        await queryInterface.createTable('usuario', {
            id_usuario: {
                type: Sequelize.INTEGER,
>>>>>>> 33ab128a953fa901c4f6d1c96f29c570c20395fe:migrations/b 20221102231847-create-usuario.js
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
<<<<<<< HEAD:migrations/20221102231847-create-usuario.js
            name: {
=======
            nombre: {
>>>>>>> 33ab128a953fa901c4f6d1c96f29c570c20395fe:migrations/b 20221102231847-create-usuario.js
                type: Sequelize.STRING
            },
            apellido: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            id_rol: {
                type: Sequelize.STRING,
                references: {
                    model: 'rols',
                    key: 'id_rol'
                },

            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('usuario');
    }
};
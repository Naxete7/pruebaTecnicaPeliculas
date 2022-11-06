'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('usuario', [{
                id_usuario: 1,
                nombre: 'Luis',
                apellido: 'García Pérez',
                email: 'lugarpe@gmail.com',
                password: 'pegalu123',
                id_rol: "usuario",
            },
            {
                id_usuario: 2,
                nombre: 'Pepe',
                apellido: 'Navarro Antolin',
                email: 'penalo@gmail.com',
                password: 'penalo123',
                id_rol: "usuario",
            },
            {
                id_usuario: 3,
                nombre: 'Jose Manuel',
                apellido: 'García Garcia',
                email: 'jogaga@gmail.com',
                password: 'manu1234',
                id_rol: "usuario",
            },
            {
                id_usuario: 4,
                nombre: 'Guillermo',
                apellido: 'Serrano Pons',
                email: 'guillexsp@hotmail.com',
                password: 'ruzafa23',
                id_rol: "administrador",
            },
            {
                id_usuario: 5,
                nombre: 'Luis',
                apellido: 'Dombriz Pérez',
                email: 'ludope@gmail.com',
                password: 'bernabeu93',
                id_rol: "usuario",
            },
            {
                id_usuario: 6,
                nombre: 'Maite',
                apellido: 'Catalá Muñoz',
                email: 'macamu80@gmail.com',
                password: 'olivia06',
                id_rol: "administrador",
            },
            {
                id_usuario: 7,
                nombre: 'Olivia',
                apellido: 'García Catalá',
                email: 'ogaca@gmail.com',
                password: 'bebe123',
                id_rol: "usuario",
            },
            {
                id_usuario: 8,
                nombre: 'Susana',
                apellido: 'García Esteban',
                email: 'susfm@hotmail.com',
                password: 'fallera09',
                id_rol: "usuario",
            },
            {
                id_usuario: 9,
                nombre: 'Javier',
                apellido: 'Flors Mancha',
                email: 'jafloma@hotmail.com',
                password: 'textturas',
                id_rol: "usuario",
            },
            {
                id_usuario: 10,
                nombre: 'Ignacio',
                apellido: 'García Valero',
                email: 'naxete7@hotmail.es',
                password: 'xilxes77',
                id_rol: "administrador",
            },
            {
                id_usuario: 11,
                nombre: 'Laura',
                apellido: 'Barchino García',
                email: 'labarxi@gmail.com',
                password: 'daniel15',
                id_rol: "usuario",
            },
            {
                id_usuario: 12,
                nombre: 'Marina',
                apellido: 'Valero Marin',
                email: 'mavama@gmail.com',
                password: 'valero60',
                id_rol: "usuario",
            },
            {
                id_usuario: 13,
                nombre: 'Victor',
                apellido: 'García Valero',
                email: 'ninlleti@gmail.com',
                password: 'vigava93',
                id_rol: "usuario",
            },
            {
                id_usuario: 14,
                nombre: 'Pepa',
                apellido: 'García Pérez',
                email: 'pegape@hotmail.com',
                password: 'josefa1987',
                id_rol: "usuario",
            },
            {
                id_usuario: 15,
                nombre: 'Martina',
                apellido: 'Lopez Pérez',
                email: 'malope@gmail.com',
                password: 'disney99',
                id_rol: "usuario",
            },

        ], {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('usuario', null, {});

    }
};
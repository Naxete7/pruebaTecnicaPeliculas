'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('rent', [{
                id_rent: 1,
                date: "2022-11-5",
                id_usuario: 1
            },
            {
                id_rent: 2,
                date: "2022-10-6",
                id_usuario: 2
            },
            {
                id_rent: 3,
                date: "2022-09-7",
                id_usuario: 4
            },
            {
                id_rent: 4,
                date: "2022-11-7",
                id_usuario: 6
            },
            {
                id_rent: 5,
                date: "2022-09-23",
                id_usuario: 8
            },
            {
                id_rent: 6,
                date: "2022-10-16",
                id_usuario: 10
            },
            {
                id_rent: 7,
                date: "2022-10-14",
                id_usuario: 12
            },
            {
                id_rent: 8,
                date: "2022-09-5",
                id_usuario: 14
            },
            {
                id_rent: 9,
                date: "2022-07-18",
                id_usuario: 3
            },
            {
                id_rent: 10,
                date: "2022-09-12",
                id_usuario: 5
            },
            {
                id_rent: 11,
                date: "2022-11-9",
                id_usuario: 7
            },
            {
                id_rent: 12,
                date: "2022-06-06",
                id_usuario: 9
            },
            {
                id_rent: 13,
                date: "2022-10-5",
                id_usuario: 11
            },
            {
                id_rent: 14,
                date: "2022-10-15",
                id_usuario: 13
            },
            {
                id_rent: 15,
                date: "2022-11-2",
                id_usuario: 15
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('rent', null, {});

    }
};
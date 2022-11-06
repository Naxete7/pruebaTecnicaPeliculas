'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('series', [{
                id_series: 1,
                title: 'Dragon Ball Z',
                date: "1989--01-12",
                episode_7_days: false,
                episodes: 291,
                seasons: 9,
                poster: "	https://www.themoviedb.org/t/p/w1280/7yMFXciYDcMle8BjbCsrZ8aqHtw.jpg",
                rank: 10,
                cinema: true,
                theater: false,
                id_articles: 2
            },
            {
                id_series: 2,
                title: 'Dragon Ball',
                date: "1986-09-23",
                episode_7_days: false,
                episodes: 153,
                seasons: 1,
                poster: "https://www.themoviedb.org/t/p/w1280/9kK5dRLHbw4QOoFcIAKK2gnOVmx.jpg",
                rank: 10,
                cinema: true,
                theater: false,
                id_articles: 4
            },
            {
                id_series: 3,
                title: 'Castle',
                date: "2009-03-17",
                episode_7_days: false,
                episodes: 173,
                seasons: 8,
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gkXKYjCjjEcRhYPMBLrB4SPPp91.jpg",
                rank: 6,
                cinema: false,
                theater: false,
                id_articles: 6
            },
            {
                id_series: 4,
                title: 'Mentes Criminales',
                date: "2005-06-06",
                episode_7_days: true,
                episodes: 334,
                seasons: 16,
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3UyUgPfcs7ByA9hxbhWSW98xdpg.jpg",
                rank: 8,
                cinema: false,
                theater: false,
                id_articles: 8
            }, {
                id_series: 5,
                title: 'Supergol',
                date: "1986-09-24",
                episode_7_days: false,
                episodes: 26,
                seasons: 1,
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n4KLsqSXBLsR72gklIVDem1jvpD.jpg",
                rank: 7,
                cinema: false,
                theater: false,
                id_articles: 10
            },
            {
                id_series: 6,
                title: 'Los Caballeros del Zodiaco',
                date: "1986-09-22",
                episode_7_days: false,
                episodes: 114,
                seasons: 1,
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rYp2lHcM5rsdEdzuYA56lk7xBDr.jpg",
                rank: 6,
                cinema: false,
                theater: false,
                id_articles: 12
            },
            {
                id_series: 7,
                title: 'La casa de papel',
                date: "2017-03-18",
                episode_7_days: false,
                episodes: 41,
                seasons: 3,
                poster: "https://www.themoviedb.org/t/p/w1280/zd8mxIfGY8SlupYd9XvK3qJL91B.jpg",
                rank: 9,
                cinema: true,
                theater: false,
                id_articles: 14
            },
            {
                id_series: 8,
                title: 'El juego del calamar',
                date: "2021-11-20",
                episode_7_days: false,
                episodes: 9,
                seasons: 1,
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yvW9VuHiwfAaTNYjALROI8evNIT.jpg",
                rank: 8,
                cinema: false,
                theater: false,
                id_articles: 16
            },
            {
                id_series: 9,
                title: 'La vuelta al mundo de Willy Fog',
                date: "1983-08-25",
                episode_7_days: false,
                episodes: 26,
                seasons: 1,
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8rCmXOatxeKtgSw9tEUCxuA9Rd.jpg",
                rank: 6,
                cinema: false,
                theater: true,
                id_articles: 18
            },
            {
                id_series: 10,
                title: 'Dartacan y los tres mosqueperros',
                date: "1981-01-12",
                episode_7_days: false,
                episodes: 26,
                seasons: 1,
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vEQa7aX3rHWbDbBtWfsEJ8Q5ydx.jpg",
                rank: 6,
                cinema: false,
                theater: false,
                id_articles: 20
            },
            {
                id_series: 11,
                title: 'Mazinger Z',
                date: "1972-04-06",
                episode_7_days: false,
                episodes: 92,
                seasons: 1,
                poster: "https://www.themoviedb.org/t/p/w1280/kShVS4uxArtR3WMvvweVD7lPWeX.jpg",
                rank: 6,
                cinema: false,
                theater: false,
                id_articles: 22
            },
            {
                id_series: 12,
                title: 'Power Rangers',
                date: "1993-02-18",
                episode_7_days: true,
                episodes: 963,
                seasons: 30,
                poster: "https://www.themoviedb.org/t/p/w1280/8lnX8RWeGBdEQPOvf2IKoRtKfZO.jpg",
                rank: 5,
                cinema: true,
                theater: false,
                id_articles: 24
            },
            {
                id_series: 13,
                title: 'Los hombres de Paco',
                date: "2005-06-06",
                episode_7_days: false,
                episodes: 133,
                seasons: 10,
                poster: "https://www.themoviedb.org/t/p/w1280/uh2W9FyVQ65FYFQwX4C9FRjW7DY.jpg",
                rank: 5,
                cinema: false,
                theater: false,
                id_articles: 26
            },
            {
                id_series: 14,
                title: 'Campeones: Oliver y Benji',
                date: "1983-10-16",
                episode_7_days: false,
                episodes: 128,
                seasons: 5,
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ylTQ8kWL2Ln5aS4W7r8ajFB5kcp.jpg",
                rank: 9,
                cinema: true,
                theater: false,
                id_articles: 28
            },
            {
                id_series: 15,
                title: 'Chicho Terremoto',
                date: "1981-05-20",
                episode_7_days: false,
                episodes: 65,
                seasons: 1,
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rvfgoeTvdJgsx3iYNXcNRAoCgbQ.jpg",
                rank: 5,
                cinema: false,
                theater: false,
                id_articles: 30
            },
            {
                id_series: 16,
                title: 'Teen Wolf',
                date: "1986-09-23",
                episode_7_days: false,
                episodes: 21,
                seasons: 2,
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iFPVcdkYhx34E1JPOkCPknX1dt5.jpg",
                rank: 6,
                cinema: true,
                theater: false,
                id_articles: 32
            },
            {
                id_series: 17,
                title: 'Musculman',
                date: "1983-10-15",
                episode_7_days: false,
                episodes: 183,
                seasons: 2,
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8VbmANlFnpgGGljbwFjvKIJJdCW.jpg",
                rank: 7,
                cinema: false,
                theater: false,
                id_articles: 34
            },
            {
                id_series: 18,
                title: 'Las Tortugas Ninja',
                date: "1987-09-23",
                episode_7_days: false,
                episodes: 193,
                seasons: 10,
                poster: "https://www.themoviedb.org/t/p/w1280/9vpWpUNKDbC41dRrsQziKREqp29.jpg",
                rank: 8,
                cinema: true,
                theater: false,
                id_articles: 36
            },
            {
                id_series: 19,
                title: 'He-man y los Masters del Universo',
                date: "1983-10-16",
                episode_7_days: false,
                episodes: 130,
                seasons: 2,
                poster: "https://www.themoviedb.org/t/p/w1280/g2thtQ6q0A9zVT8waPaECNO6XuD.jpg",
                rank: 9,
                cinema: true,
                theater: false,
                id_articles: 38
            },
            {
                id_series: 20,
                title: 'Los Trotamúsicos',
                date: "1989-09-23",
                episode_7_days: false,
                episodes: 26,
                seasons: 1,
                poster: "https://www.themoviedb.org/t/p/w1280/ogorqSGbfxB6Zm1k0k8dIm1BTmg.jpg",
                rank: 9,
                cinema: false,
                theater: true,
                id_articles: 40
            },
            {
                id_series: 21,
                title: 'The crwon',
                date: "2016-02-26",
                episode_7_days: true,
                episodes: 50,
                seasons: 5,
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4a7HOUtb6sBpqmuByTxenRxlqds.jpg",
                rank: 6,
                cinema: false,
                theater: false,
                id_articles: 42
            },
            {
                id_series: 22,
                title: 'Juego de tronos',
                date: "2011-03-15",
                episode_7_days: false,
                episodes: 73,
                seasons: 8,
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z9gCSwIObDOD2BEtmUwfasar3xs.jpg",
                rank: 8,
                cinema: false,
                theater: false,
                id_articles: 44
            },
            {
                id_series: 23,
                title: 'La casa del Dragon',
                date: "2022-09-12",
                episode_7_days: true,
                episodes: 10,
                seasons: 1,
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xiB0hsxMpgxpJehYxUDhiUkg2w.jpg",
                rank: 7,
                cinema: false,
                theater: false,
                id_articles: 46
            },
            {
                id_series: 24,
                title: 'El Señor de los Anillos: Los anillos de poder',
                date: "2022-09-12",
                episode_7_days: true,
                episodes: 8,
                seasons: 1,
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/suvlZfDAoq5vfVUrfb468KJhFlL.jpg",
                rank: 7,
                cinema: true,
                theater: false,
                id_articles: 48
            },
            {
                id_series: 25,
                title: 'Dahmer-Monstruo: La historia de Jeffrey Dahmer',
                date: "2022-09-23",
                episode_7_days: true,
                episodes: 10,
                seasons: 1,
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vlUMBgKO1HOwPMJwHnHzr99BHwN.jpg",
                rank: 6,
                cinema: false,
                theater: false,
                id_articles: 50
            },
            {
                id_series: 26,
                title: 'Cuéntame cómo pasó',
                date: "2001-11-28",
                episode_7_days: true,
                episodes: 409,
                seasons: 22,
                poster: "",
                rank: 5,
                cinema: true,
                theater: true,
                id_articles: 52
            },
            {
                id_series: 27,
                title: 'La que se avecina',
                date: "2007-01-15",
                episode_7_days: true,
                episodes: 178,
                seasons: 13,
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/76GUieAvgHwH07Yd7kR86iay3dx.jpg",
                rank: 9,
                cinema: true,
                theater: false,
                id_articles: 54
            },
            {
                id_series: 28,
                title: '911',
                date: "2018-02-18",
                episode_7_days: true,
                episodes: 88,
                seasons: 6,
                poster: "https://www.themoviedb.org/t/p/w1280/jvStfYRsDrcVymTEgRbyHqpBXwz.jpg",
                rank: 6,
                cinema: true,
                theater: true,
                id_articles: 56
            },

        ], {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('series', null, {});

    }
};
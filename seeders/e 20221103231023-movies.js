'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('movies', [{
                id_movies: 1,
                title: 'El Rey leon',
                genre: 'Animacion',
                date: "1994-11-6",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
                rank: 1,
                id_articles: 1
            },
            {
                id_movies: 2,
                title: 'Joker',
                genre: "crimen,suspense,drama",
                date: "2019-10-4",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v0eQLbzT6sWelfApuYsEkYpzufl.jpg",
                rank: 11,
                id_articles: 3
            },
            {
                id_movies: 3,
                title: 'Regreso al futuro',
                genre: "Ciencia Ficcion",
                date: "1985-12-2",
                poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ldJzO9D40mCVeDaZQ1986t8rguZ.jpg",
                rank: 8,
                id_articles: 5
            },
            {
                id_movies: 4,
                title: 'El club de los poetas muertos',
                genre: "Drama",
                date: "1989-11-24",
                poster: "	https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rP92uZg0Azxjk9Lj5juRA8TEMR5.jpg",
                rank: 7,
                id_articles: 7
            },
            {
                id_movies: 5,
                title: 'Gladiator',
                genre: "Acción, drama, aventura",
                date: "2000-05-19",
                poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/90QFOG5zSN4cbrIVs4DL4ePAuA5.jpg",
                rank: 6,
                id_articles: 9
            },
            {
                id_movies: 6,
                title: 'Django desencadenado',
                genre: "Drama,western",
                date: "2013-01-18",
                poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/naaYX64yMGzEFsATOFQDaxxQWbJ.jpg",
                rank: 25,
                id_articles: 11
            },
            {
                id_movies: 7,
                title: 'El show de Truman',
                genre: "Comedia,drama",
                date: "1998-10-30",
                poster: "	https://www.themoviedb.org/t/p/w1280/4BGVZSwv5n0hMIAWwiSjMFDQ63K.jpg",
                rank: 14,
                id_articles: 13
            },
            {
                id_movies: 8,
                title: 'Coco',
                genre: "Animación, drama",
                date: "2017-02-1",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lUZZhYLLDU4g4XGQ5tvjYNVytxc.jpg",
                rank: 5,
                id_articles: 15
            },
            {
                id_movies: 9,
                title: 'El señor de los anillos: El retorno del Rey',
                genre: "Aventura,fantasia,accion",
                date: "2003-12-17",
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mWuFbQrXyLk2kMBKF9TUPtDwuPx.jpg",
                rank: 4,
                id_articles: 17
            },
            {
                id_movies: 10,
                title: 'Bohemian Rapsody',
                genre: "Musica,drama,historia",
                date: "2018-10-31",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gk6IErM0acV6HJRwKZy8ecBoddc.jpg",
                rank: 9,
                id_articles: 19
            },
            {
                id_movies: 11,
                title: 'El gran torino',
                genre: "Drama",
                date: "2008-12-9",
                poster: "	https://www.themoviedb.org/t/p/w1280/7w54KRHdRokgXqxL59GKVau8e6l.jpg",
                rank: 13,
                id_articles: 21
            },
            {
                id_movies: 12,
                title: 'Toy Story',
                genre: "Animación,Aventura,Familia,Comedia",
                date: "1996-03-15",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4bxprr56U0bguis9PgjKTLE08KD.jpg",
                rank: 20,
                id_articles: 23
            },
            {
                id_movies: 13,
                title: 'El gran showman',
                genre: "Drama",
                date: "2017-12-29",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4ssLEvNQ5oM9sJnV6FkDVgOtyAE.jpg",
                rank: 22,
                id_articles: 25
            },
            {
                id_movies: 14,
                title: 'Jurassic Park',
                genre: "Aventura, Ciencia ficción",
                date: "1993-09-30",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lTeTHvfUHEJDK7o3jg06lYi2bLR.jpg",
                rank: 21,
                id_articles: 27
            },
            {
                id_movies: 15,
                title: 'Ben Hur',
                genre: "Acción, Drama, Historia",
                date: "1960-12-19",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mcNBBxFrikb8ad8s5mDQp1TGcaU.jpg",
                rank: 24,
                id_articles: 29
            },
            {
                id_movies: 16,
                title: 'Campeones',
                genre: "Drama, Comedia",
                date: "2018-04-06",
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lXLKmT6mtizYvweAgPXVHs0ApvR.jpg",
                rank: 23,
                id_articles: 31
            },
            {
                id_movies: 17,
                title: 'Monstruos S.A.',
                genre: "Animación,Comedia,Familia",
                date: "2002-02-8",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTE3BLVCpYaR71L2U8SHV22HvEr.jpg",
                rank: 19,
                id_articles: 33
            },
            {
                id_movies: 18,
                title: 'Buscando a Nemo',
                genre: "Animación,Familia",
                date: "2003-11-28",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTE3BLVCpYaR71L2U8SHV22HvEr.jpg",
                rank: 18,
                id_articles: 35
            },
            {
                id_movies: 19,
                title: 'Rocky',
                genre: "Drama",
                date: "1977-05-12",
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mQKvObSEYESsDQXFWxfe0FARIP7.jpg",
                rank: 17,
                id_articles: 37
            },

            {
                id_movies: 20,
                title: 'El caballero oscuro: La Leyenda renace',
                genre: "Acción, Crimen, Drama, Suspense",
                date: "2012-07-20",
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rrS7K8tXVFUBliIKWaRuSq65nWr.jpg",
                rank: 2,
                id_articles: 39
            },
            {
                id_movies: 21,
                title: 'La Bella y la Bestia',
                genre: "Animación, Familia, Romance, Fantasia",
                date: "1992-11-24",
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1FxMtEUc6DP1MXsTBftOFaoCVVO.jpg",
                rank: 10,
                id_articles: 41
            },
            {
                id_movies: 22,
                title: 'La princesa prometida',
                genre: "Aventura, Fantasia, Comedia, Romance",
                date: "1987-12-18",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nHDpaLB6gMKyD8hMtSthtV7yPt9.jpg",
                rank: 16,
                id_articles: 43
            },
            {
                id_movies: 23,
                title: 'Mary Poppins',
                genre: "Comedia, Fantasia, Familia",
                date: "1965-12-2",
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8hU9v0EYEiAWYOkROcy4iWnSNpl.jpg",
                rank: 15,
                id_articles: 45
            },
            {
                id_movies: 24,
                title: 'Escubriendo nunca jamas',
                genre: "Drama",
                date: "2005-02-11",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ibdzSgStiFFXXnQc3WsMrNqv0wt.jpg",
                rank: 12,
                id_articles: 47
            },
            {
                id_movies: 25,
                title: 'Tortugas Ninja',
                genre: "Ciencia Ficción, Acción, Aventura, Comedia",
                date: "1990-11-30",
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uDJipJy4zwIN9F7stcaTGwfD9yP.jpg",
                rank: 26,
                id_articles: 49
            },
            {
                id_movies: 26,
                title: 'El fuego de la venganza',
                genre: "Acción, Drama, Suspense",
                date: "2004-10-8",
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Nsl1f7qLoe3ZGbb5kvhQQWBRx3.jpg",
                rank: 27,
                id_articles: 51
            },
            {
                id_movies: 27,
                title: 'Los Goonies',
                genre: "Aventura, Comedia, Familia",
                date: "1985-07-24",
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h0QoQSodfdd3VTBqlFb2QP7wIbL.jpg",
                rank: 15,
                id_articles: 53
            },
            {
                id_movies: 28,
                title: 'Eduardo Manostijeras',
                genre: false,
                date: "1991-04-15",
                poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vd8tCekihFx82bzmENaASvbhNmx.jpg",
                rank: 30,
                id_articles: 55
            },
            {
                id_movies: 29,
                title: 'Los cazafantasmas',
                genre: "Comedia, Fantasía",
                date: "1984-12-5",
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6gzodU7MbxcgsOCa0LFZScFkyvK.jpg",
                rank: 28,
                id_articles: 57
            },
            {
                id_movies: 30,
                title: 'E.T. el extraterrestre',
                genre: "Ciencia Ficción, Aventura, Familia",
                date: "1982-12-6",
                poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lVUsjKHXPvLTNpFBABnrPzhx5Dc.jpg",
                rank: 29,
                id_articles: 59
            },





        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Movies', null, {});

    }
};
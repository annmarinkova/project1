'use strict';
//1
const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');

//2
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

//3
const film1 = prompt('Один из последних просмотренных фильмов?', ''),
	  mark1 = prompt('На сколько оцените его?', ''),
	  film2 = prompt('Один из последних просмотренных фильмов?', ''),
	  mark2 = prompt('На сколько оцените его?', '');
personalMovieDB.movies[film1] = mark1;
personalMovieDB.movies[film2] = mark2;

console.log(personalMovieDB);




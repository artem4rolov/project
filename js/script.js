"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstQuestion = prompt("Один из последних просмотренных фильмов?", "");
let firstQuestionCopy = prompt("Один из последних просмотренных фильмов?", "");

let secondQuestion = prompt("На сколько оцените его?", "");
let secondQuestionCopy = prompt("На сколько оцените его?", "");

personalMovieDB.movies[firstQuestion] = secondQuestion;
personalMovieDB.movies[firstQuestionCopy] = secondQuestionCopy;

console.log(personalMovieDB);;
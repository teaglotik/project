'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
const personalMovieDb = {
    count : numberOfFilms,
    movies : {}, //{} - масив
    actors : {},
    genres : [], // [] - обьект
    privat : false
};
const a = prompt('один из последнихз просмотреніх фильмов?',''),
      b = prompt('на сколько оцените его?', ''),
      c = prompt('один из последнихз просмотреніх фильмов?',''),
      d = prompt('на сколько оцените его?', '');
      personalMovieDb.movies[a] = b;
      personalMovieDb.movies[c] = d;
      console.log(personalMovieDb);
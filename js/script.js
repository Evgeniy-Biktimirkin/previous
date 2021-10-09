
"use strict";


/*function youSayGoodBye(){
    alert("Good Bye");
    function andISayHello(){
        alert("Hello!");
    }
    return andISayHello;
}
let something = youSayGoodBye();
something();  -  выдаёт в том же порядке*/

//---------------------------------------------------------

/*let theBigString = "Евгений Юрьевич Биктимиркин";
function greatings (){theBigString.slice(0, 15);
let npHello = "Здравствуйте, " + greatings () + "!";}
console.log (greatings());   -  RangeError:
Maximum call stack size exceeded at String.slice 
поэтому надо было через let разгрузить тело f(x)ции */
//---------------------------------------------------------


/*const answer = prompt('Вам есть 18?', "18"); - можно с разными кавычками
console.log(typeof answer); - без скобок тоже робит 

const category = 'toys';
console.log(`https://someurl.com/${catogory}/5`);

const user = "Ivan";
alert(`Привет, ${user}`); */
//---------------------------------------------------------



//4е задание)


let personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    private: false,
    start1: function() { //опять же, всё поместили в функцию, чтобы поблочно было
        personalMovieDB.count = + prompt('Сколько фильмов вы уже посмотрели?', "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { //пошли от противного
            personalMovieDB.count = + prompt('Сколько фильмов вы уже посмотрели?', ""); //если хоть одно условие будет true - опять задаём вопрос
        }

    },
    rememberMyFilms: function () {
    for (let i = 0; i < 2; i++){let lastFilm1 = prompt('Один из последних просмотренных фильмов?', "");
    let filmMark1 = prompt('На сколько оцените его?', "");
    if (lastFilm1 != null && filmMark1 != null && lastFilm1 != '' && filmMark1 != ''
    && lastFilm1.length <= +50 && filmMark1 <= +50 && filmMark1 != isNaN(filmMark1)){
        personalMovieDB.movies[lastFilm1] = filmMark1;
        console.log('Ok');}
        else {console.log('Error');
        i--;}
    }

    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < +10 && personalMovieDB.count >= +0){
            alert('Просмотрено недостаточно фильмов для оценки на сайте.');
        } else if (personalMovieDB.count >= +10 && personalMovieDB.count <= +30){
            alert ('Вы явно неплохо разбираетесь в кино.');
        } else if (personalMovieDB.count > +30){
            alert('Да вы киноман! Моё почтение.');
        } else if (personalMovieDB.count < +0) {
            alert ('Нельзя посмотреть отрицательное количество фильмов.');}
                //   else {alert ('Произошла ошибка...');}
        },

        showMyDB: function (hidden) {
            if (!hidden){
                   console.log(personalMovieDB);
               }
           },

        toggleVisibleMyDB: function (){
            if (personalMovieDB.private){
                personalMovieDB.private = false;
            } else {
                personalMovieDB.private = true;
            }
        },

//        console.log(personalMovieDB);

      writeYourGenres: function () {
        for (let i = 1; i < 4; i++){
            let favGenre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (favGenre != '' && favGenre != null) { 
            personalMovieDB.genres[i-1] = favGenre;
        } else {
            console.log('Вы ввели некорректные данные или не ввели вовсе');
            i--;
        }
        }
        personalMovieDB.genres.forEach(item, i, genres);{ //шляпа какая-то
            console.log(`Любимый жанр № ${i+1} - это ${item}`);
        }

    }
    
};
personalMovieDB.start1();
personalMovieDB.writeYourGenres();
console.log(personalMovieDB);



/*personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB(); */

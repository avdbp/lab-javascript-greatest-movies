// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let newMoviesArray = moviesArray.map(movie => movie.director);
    return newMoviesArray;
  }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenSpielbergMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg');
    let stevenSpielbergMoviesDrama = stevenSpielbergMovies.filter(movie => movie.genre.includes('Drama'));
    let stevenSpielbergMoviesDramaLength = stevenSpielbergMoviesDrama.length;
    return stevenSpielbergMoviesDramaLength;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
    let allMoviesWithScore = moviesArray.filter(movie => movie.score)
    let allMoviesScore = allMoviesWithScore.map(movie => movie.score);
    let average = allMoviesScore.reduce((acumulador, valorActual) => acumulador + valorActual) / allMoviesScore.length;
    return average.toFixed(2);
}

// PASA LO MISMO QUE CON OTROS CASOS, LA FUNCIÓN CUMPLE
// CON TODO LO QUE PIDE JASMINE PERO IGUAL NO PINTA VERDE.

// debe ser declarado ✔
// debe devolver un número ✔
// debería devolver la puntuación media de 2 películas con una puntuación de 8 cada una ✔
// debe redondearse a 2 decimales ✔
// debería devolver 0 si se pasa una matriz vacía ✔
// debería devolver el promedio incluso si una de las películas no tiene puntaje ✔

// TODO ESTO LO HACE SIN PROBLEMA.
// INCLUSO, HE BUSCADO OTRA SOLUCIÓN EN CHATGPT Y ESTE
// ME DIO UN RESULTADO UN POCO DIFERENTE Y TAMPOCO PINTABA
// TODO EL JASMINE, AUN CUANDO LE PEDI QUE CUMPLIERA CON
// TODO LO QUE PIDE


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovie = moviesArray.filter(movie => movie.genre.includes("Drama"));
    let dramaMovieWithScore = dramaMovie.filter(movie => movie.score);
    let sumaDramaMoviesScore = dramaMovieWithScore.map(movie => movie.score);
    let averageDramaMovie = sumaDramaMoviesScore.reduce((acumulador, valorActual) => acumulador + valorActual) / sumaDramaMoviesScore.length;
    return averageDramaMovie.toFixed(2);
}
// MISMO CASO, NO ENTIENDO EN QUE ESTOY FALLANDO PARA JASMINE.
// SI ME PIDEN QUE LA FUNCIÓN RETORNE CIERTAS COSAS Y MI FUNCIÓN LAS RETORNA,
// MI PROPUESTA DEBERÍA SER VALIDA, CUMPLE LO SOLICITADO O ESO CREO YO

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.slice();
    sortedMovies.sort((yearA, yearB) => {
      if (yearA.year !== yearB.year) {
        return yearA.year - yearB.year;
      }
      return yearA.title.localeCompare(yearB.title);
    });
  
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const nameMovies = moviesArray.slice();
    nameMovies.sort((name1, name2) => name1.title.localeCompare(name2.title));
    const firts20Titles = nameMovies.slice(0, 20).map(moviesArray => moviesArray.title);
    
    return firts20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

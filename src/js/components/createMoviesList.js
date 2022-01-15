// Сюда передавать массив объектов с фильмами
// и здесь генерится разметка карточек фильмов

import { refs } from '../utils/refs.js';
import movieCard from '../timplates/movieCard.hbs';

//-------------------------------------------
// временный код. Вызывается первая страница списка популярных фильмов
// что бы сделать разметку и цсс под карточку
// потом его удалить
import { normalizationMovieObj } from '../utils/normalizationObj';
import settings from '../utils/settings';
const { BASE_URL, API_KEY } = settings;

async function fetchPopular() {
  const urlPopular = `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=3`;
  return fetch(urlPopular).then(response => response.json());
}

export async function PopularMovies() {
  try {
    const moviesList = await fetchPopular();
    const { results } = moviesList;
    console.log(moviesList);
    renderMoviesList(results);
  } catch (error) {
    console.log(error);
  }
}

PopularMovies();
// --------------------------------------------------------------

// results - это объект на входе

export function renderMoviesList(results) {
  // нормализация объекта с учетом обрезания жанров до 2+other...
  const normalObjs = results.map(element => {
    let temp = normalizationMovieObj(element);
    // Обрезание колличества жанров
    temp.genre.length <= 3
      ? (temp.genre = temp.genre.join(', '))
      : (temp.genre = [temp.genre[0], temp.genre[1], 'other...'].join(', '));
    // Обрезание длины названия фильма
    if (temp.title.length > 37) temp.title = temp.title.slice(0, 37) + '...';
    return temp;
  });
  console.log(normalObjs); // Потом удалить

  refs.filmsList.insertAdjacentHTML('beforeend', movieCard(normalObjs));
}

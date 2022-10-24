const movieRouter = require('express').Router();
const { validateCreateMovie, validateDeleteMovie } = require('../middlewares/validation');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

// # возвращает все сохранённые текущим  пользователем фильмы
movieRouter.get('/', getMovies);
// # создаёт фильм
movieRouter.post(
  '/',
  validateCreateMovie,
  createMovie,
);

// # удаляет сохранённый фильм по id
movieRouter.delete(
  '/:id',
  validateDeleteMovie,
  deleteMovie,
);

module.exports = { movieRouter };

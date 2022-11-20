const router = require('express').Router();

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

const { validateCreateMovie, validateDeleteMovie } = require('../utils/validation');

// # возвращает все сохранённые текущим  пользователем фильмы
router.get('/movies', getMovies);
// # создаёт фильм
router.post('/movies', validateCreateMovie, createMovie);
// # удаляет сохранённый фильм по id
router.delete('/movies/:_id', validateDeleteMovie, deleteMovie);

module.exports = router;

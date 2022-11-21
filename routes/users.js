const router = require('express').Router();

const { updateUser, getCurrentUser } = require('../controllers/users');
const { validateUpdateUser } = require('../utils/validation');

// возвращает информацию о пользователе (email и имя)
router.get('/users/me', getCurrentUser);
// обновляет информацию о пользователе (email и имя)
router.patch('/users/me', validateUpdateUser, updateUser);

module.exports = router;

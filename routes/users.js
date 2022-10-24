const userRouter = require('express').Router();
const { validateUpdateProfile } = require('../middlewares/validation');

const {
  updateProfile,
  getUser,
} = require('../controllers/users');

// возвращает информацию о пользователе (email и имя)
userRouter.get('/me', getUser);
// обновляет информацию о пользователе (email и имя)
userRouter.patch(
  '/me',
  validateUpdateProfile,
  updateProfile,
);

module.exports = { userRouter };

const express = require('express');

// Controllers
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users.controller');

const router = express.Router();

router
  .route('/')
  .get(getAllUser)
  .post(createUser);

router
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = { usersRouter: router };


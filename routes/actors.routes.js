const express = require('express');

// Controllers
const {
  getAllActors,
  getActorById,
  createActors,
  updateActors,
  deleteActors
} = require('../controllers/actors.controller');

const router = express.Router();

router
  .route('/')
  .get(getAllActors)
  .post(createActors)

router
  .route('/:id')
  .get(getActorById)
  .patch(updateActors)
  .delete(deleteActors);

module.exports = { actorsRouter: router };


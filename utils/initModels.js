const { User } = require('../models/user.model');
const { Actor } = require('../models/actor.model');
const { ActorInMovies } = require('../models/actorsInMovies.model');
const { Movie } = require('../models/movies.model');
const { Review } = require('../models/review.model');

const initModel = () => {
  //1 User <--> M Reviews
  User.hasMany(Review);
  Review.belongsTo(User);

  // 1 Movie <--> M reviews
  Movie.hasMany(Review);
  Review.belongsTo(Movie);

  // M movies <--> M Actores
  Movie.belongsToMany(Actor, { through: ActorInMovies });
  Actor.belongsToMany(Movie, { through: ActorInMovies });
};

module.exports = { initModel };


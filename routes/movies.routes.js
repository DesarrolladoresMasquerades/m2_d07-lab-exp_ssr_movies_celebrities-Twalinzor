const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .populate("cast")
    .then((movie) => {
      res.render("movies/movie-details", movie);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
    res.render("movies/movies", { movies });
  });
});

router.get("/movies/create", (req, res) => {
    Celebrity.find()
    .then((celebrities)=>{
        res.render("movies/new-movie", { celebrities });
    })
    
});

router.post("/movies/:id/delete", (req, res) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/movies/create", (req, res) => {
  const title = req.body.title;
  const genre = req.body.genre;
  const plot = req.body.plot;
  const cast = req.body.cast;

  Movie.create({ title, genre, plot, cast })
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
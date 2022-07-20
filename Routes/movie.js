const express = require('express')
const {fetchAllMovies,createMovies,updateMovie,deleteMovie, getSingleMovie} = require('../handlers/movie')

const movieRouter = express.Router()

movieRouter.get("/movies/all",fetchAllMovies)

movieRouter.get("/movies/:id", getSingleMovie)

movieRouter.post("/movies",createMovies)

movieRouter.patch("/movies/:id",updateMovie)

movieRouter.delete("/movies/:id", deleteMovie)


module.exports = movieRouter
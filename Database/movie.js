const mongoose = require ('mongoose')

const movieSchema = new mongoose.Schema({
   name:String
})

const Movie = mongoose.model("movie",movieSchema)

module.exports = Movie



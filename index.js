const express = require('express')
const connectToDatabase = require('./Database')
const movieRouter = require('./Routes/movie')

const app = express()

app.use(express.json())

app.use(movieRouter)

connectToDatabase().then(() => {
    app.listen(3001, () => {
        console.log("server is running at http://localhost:3001")
    })
})
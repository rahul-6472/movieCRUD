const mongoose = require ('mongoose')

async function connectToDatabase ()  {
  const dbUri = "mongodb://localhost:27017/movies"

  try {
     const response = await mongoose.connect(dbUri) 
     console.log("database connection successfull..")
  } catch (ex) {
      console.log("error in initiating db connection", ex.message)
      throw ex
  }
}

module.exports = connectToDatabase 
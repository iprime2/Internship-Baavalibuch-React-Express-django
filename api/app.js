require('dotenv').config()
const express = require('express')

// db connection
const connectDB = require('./db/dbConnect')

const app = express()
const PORT = process.env.PORT || 1010

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL)
    console.log('DB Connected')
    app.listen(process.env.PORT || 8800, () => {
      console.log('Server running on : ' + process.env.PORT)
    })
  } catch (error) {
    console.log('SERVER_OR_DB_ERROR' + error)
  }
}

start()

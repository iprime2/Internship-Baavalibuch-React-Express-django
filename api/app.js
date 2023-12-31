const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

// db connection
const connectDB = require('./db/dbConnect')

const PORT = process.env.PORT || 1010

const textRoutes = require('./routes/text')

app.use(cors())
app.use(express.json())

// routes

app.use('/api/text', textRoutes)

const start = async () => {
  try {
    const db = await connectDB(process.env.MONGO_URI)
    // db.on('error', console.error.bind(console, 'MongoDB connection error:'))
    console.log('DB Connected')
    app.listen(PORT, () => {
      console.log('Server running on : ' + process.env.PORT)
    })
  } catch (error) {
    console.log('SERVER_OR_DB_ERROR' + error)
  }
}

start()

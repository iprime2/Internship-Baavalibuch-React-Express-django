const mongoose = require('mongoose')

const connectionSchema = new mongoose.Schema(
  {
    loggedTime: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
)

const ConnectionModel = mongoose.model('Connection', connectionSchema)

module.exports = ConnectionModel

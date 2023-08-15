const mongoose = require('mongoose')

const ConnectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    count: {
      type: Number,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Connection', ConnectionSchema)

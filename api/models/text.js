const mongoose = require('mongoose')

const TextSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('text', TextSchema)

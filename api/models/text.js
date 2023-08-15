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

const textModel = mongoose.model('Text', TextSchema)

module.exports = textModel

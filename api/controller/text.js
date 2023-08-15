const TextModel = require('../models/text')
const { countConnection } = require('../controller/connection')

const getText = async (req, res) => {
  try {
    const { text } = req.body

    const textSaved = new TextModel()

    textSaved.text = text

    await textSaved.save()

    countConnection()

    res.status(200).json(textSaved)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { getText }

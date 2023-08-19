const axios = require('axios')

const TextModel = require('../models/text')
const { countConnection } = require('../controller/connection')

const getText = async (req, res) => {
  try {
    const { text } = req.body

    const textSaved = new TextModel()

    textSaved.text = text

    await textSaved.save()

    countConnection()

    const randomText = await TextModel.findOne({})

    const data = {
      text1: text,
      text2: randomText.text,
    }

    const ngramsRes = await axios.post(
      'http://localhost:8000/api/ngrams-text/',
      data
    )

    const ngramsComparison = ngramsRes.data

    res.status(200).json(ngramsComparison)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { getText }

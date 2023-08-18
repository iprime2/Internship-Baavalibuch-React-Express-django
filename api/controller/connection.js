const ConnectionModel = require('../models/Connection')

const countConnection = async (req, res) => {
  try {
    const newConnection = new ConnectionModel()

    await newConnection.save()

    console.log('Connection logged successfully')
    // res.status(200).json({ message: 'Connection logged successfully' })
  } catch (error) {
    res.status(500).json({ Message: 'Failed log connection' })
  }
}

module.exports = {
  countConnection,
}

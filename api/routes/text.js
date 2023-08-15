const router = require('express').Router()

const { getText } = require('../controller/text')

router.post('/', getText)

module.exports = router

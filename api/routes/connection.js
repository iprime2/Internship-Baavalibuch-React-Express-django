const router = require('express').Router()

const { countConnection } = require('../controller/connection')

router.post('/connection', countConnection)

module.exports = router

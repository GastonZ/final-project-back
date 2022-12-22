let router = require('express').Router()
let { create } = require('../controllers/carRequest')


router.post('/', create)

module.exports = router
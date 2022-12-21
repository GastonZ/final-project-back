let  router = require('express').Router()
let {  create, deleted, read } = require('../controllers/comments')

router.get('/', read)
router.post('/new', create)

module.exports = router
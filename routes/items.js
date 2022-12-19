let  router = require('express').Router()
let {create, read, destroy, readId} = require('../controllers/item')
const schema = require('../schemas/items')
const validator = require('../middlewares/validator')
const isTheSameUser = require('../middlewares/isTheSameUser')
const Items = require('../models/Items')
const passport = require ('../config/passport')


router.post('/', validator(schema), create)
router.get('/', read)
router.delete('/:id',passport.authenticate("jwt", { session: false }),isTheSameUser(Items), destroy)
router.get('/:id', readId)

module.exports = router
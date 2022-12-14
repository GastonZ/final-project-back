let  router = require('express').Router()
let {create, read, update, destroy, readId} = require('../controllers/item')
const schema = require('../schemas/items')
const validator = require('../middlewares/validator')
const isTheSameUser = require('../middlewares/isTheSameUser')
const Items = require('../models/Items')
const passport = require ('../config/passport')
/* const schemaItem = require('../schemas/itemEdit') */


router.post('/',passport.authenticate("jwt", { session: false }), validator(schema), create)
router.get('/', read)
router.put('/:id',passport.authenticate("jwt", { session: false }),isTheSameUser(Items), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }),isTheSameUser(Items), destroy)
router.get('/:id', readId)

module.exports = router
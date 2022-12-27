let  router = require('express').Router()
let {create, read, update, destroy, readId} = require('../controllers/car')
const schema = require('../schemas/cars')
const validator = require('../middlewares/validator')
const isTheSameUser = require('../middlewares/isTheSameUser')
const Cars = require('../models/Cars')
const passport = require ('../config/passport')
/* const schemaCar = require('../schemas/carEdit') */


router.post('/',passport.authenticate("jwt", { session: false }), validator(schema), create)
router.get('/', read)

router.delete('/:id',passport.authenticate("jwt", { session: false }),isTheSameUser(Cars), destroy)
router.get('/:id', readId)




module.exports = router
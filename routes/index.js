const router = require('./users');
let users = require('./users')
let cars = require('./cars')
let items = require('./items')

router.use('/cars', cars)
router.use('/auth', users)
router.use('/items', items)



module.exports = router;

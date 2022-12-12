const router = require('./users');
let users = require('./users')
let cars = require('./cars')

router.use('/cars', cars)
router.use('/auth', users)

module.exports = router;

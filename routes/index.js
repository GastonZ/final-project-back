const router = require('./users');
let users = require('./users')
let cars = require('./cars')
let items = require('./items')
let cart = require('./cart')
let comments = require('./comments')
let carRequest = require('./carRequest')


router.use('/cars', cars)
router.use('/auth', users)
router.use('/items', items)
router.use('/cart', cart)
router.use('/comments', comments)
router.use('/carrequest', carRequest)


module.exports = router;

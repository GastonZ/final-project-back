const router = require('./users');
let users = require('./users')
let cars = require('./cars')
let items = require('./items')
/* let cart = require('./cart')
 */
router.use('/cars', cars)
router.use('/auth', users)
router.use('/items', items)
/* router.use('/cart', cart)
 */


module.exports = router;

let  router = require('express').Router()
let {addItemCart, deleteItem, getItems, getItemsCart, putItem, increaseAmount, deleteManyById} = require("../controllers/cart");

const PaymentController = require("../controllers/payment")
const PaymentsServices = require("../config/paymentService")
const PaymentInstance = new PaymentController(new PaymentsServices())

router.get("/items", getItems); //Obtiene prod de la DB
router.get("/items-cart", getItemsCart); //Trae prod de la DB
router.post("/items-cart", addItemCart); //Agrega prod al cart
router.put("/items-cart/:itemId", putItem); //Modifica cantidad de prod en el cart
router.delete("/items-cart/:itemId", deleteItem); //Elimina prod del cart
router.put("/items-cart/increase/:itemId", increaseAmount)
router.delete("/items-cart/paymentDone/:userId", deleteManyById)

router.post("/payments", function(req,res,next){
    PaymentInstance.getPaymentLink(req,res)
})

module.exports = router


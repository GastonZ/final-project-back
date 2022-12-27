let  router = require('express').Router()
let {addItemCart, deleteItem, getItems, getItemsCart, putItem} = require("../controllers/cart");


router.get("/items", getItems); //Obtiene prod de la DB
router.get("/items-cart", getItemsCart); //Trae prod de la DB
router.post("/items-cart", addItemCart); //Agrega prod al cart
router.put("/items-cart/:itemId", putItem); //Modifica cantidad de prod en el cart
router.delete("/items-cart/:itemId", deleteItem); //Elimina prod del cart

module.exports = router
const Cart = require("../models/Cart");
const Item = require('../models/Items')

const controller = {
 addItemCart : async (req, res) => {
  const { name, image, price } = req.body;

  /* Nos fijamos si tenemos el Itemo */
  const itsInItems = await Item.findOne({ name });

  /* Nos fijamos si todos los campos vienen con info */
  const isntEmpty = name !== "" && image !== "" && price !== "";

  /* Nos fijamos si el Itemo ya esta en el carrito */
  const itsInTheCart = await Cart.findOne({ name });

  /* Si no tenemos el Itemo */
  if (!itsInItems) {
    res.status(400).json({
      mensaje: "This Item doesn´t exist in our data base ",
    });

    /* Si nos envian algo y no esta en el carrito lo agregamos */
  } else if (isntEmpty && !itsInTheCart) {
    const newItemInCart = new Cart({ name, image, price, amount: 1 });

    /* Y actualizamos la prop inCart: true en nuestros Itemos */
    await Item.findByIdAndUpdate(
      itsInItems?._id,
      { inCart: true, name, image, price },
      { new: true }
    )
      .then((item) => {
        newItemInCart.save();
        res.json({
          mensaje: `The item has been added to the cart`,
          item,
        });
      })
      .catch((error) => console.error(error));

    /* Y si esta en el carrito avisamos */
  } else if (itsInTheCart) {
    res.status(400).json({
      mensaje: "The item is in the cart",
    });
  }
},
deleteItem : async (req, res) => {
    const { itemId } = req.params;
  
    /* Buscamos el itemo en el carrito */
    const itemInCart = await Cart.findById(itemId);
  
    /* Buscamos el itemo en nuestra DB por el nombre del que esta en el carrito */
    const { name, image, price, _id } = await Item.findOne({
      name: itemInCart.name,
    });
  
    /* Buscamos y eliminamos el itemo con la id */
    await Cart.findByIdAndDelete(itemId);
    
    /* Buscamos y editamos la prop inCart: false */
    /* Le pasamos la id del producto en la DB */
    /* La prop a cambiar y las demas */
    /* Y el new para devolver el producto editado */
    await Item.findByIdAndUpdate(
      _id,
      { inCart: false, name, image, price },
      { new: true }
    )
      .then((item) => {
        res.json({
          mensaje: `The item ${item.name} was eliminated of the cart`,
        });
      })
      .catch((error) => res.json({ mensaje: "Error" }));
  },
  getItems : async (req, res) => {
    const items = await Item.find();
  
    if (items) {
      res.json({ items });
    } else {
      res.json({ menssage: "No items found" });
    }
  },
  getItemsCart : async (req, res) => {
    const itemsCart = await Cart.find();
  
    if (itemsCart) {
      res.json({ itemsCart });
    } else {
      res.json({ menssage: "There aren´t items in the cart" });
    }
  },
  putItem : async (req, res) => {
    const { itemId } = req.params;
    const { query } = req.query;
    const body = req.body;
  
    /* Buscamos el itemo en el carrito */
    const itemSearched = await Cart.findById(itemId);
  
    /* Si no hay query 'add' o 'del' */
    if (!query) {
      res.status(404).json({ mensaje: "You must send a query" });
  
      /* Si esta el itemo en el carrito y quiero agregar */
    } else if (itemSearched && query === "add") {
      body.amount = body.amount + 1;
  
      await Cart.findByIdAndUpdate(itemId, body, {
        new: true,
      }).then((item) => {
        res.json({
          mensaje: `The item: ${item.name} was updated`,
          item,
        });
      });
  
      /* Si esta el itemo en el carrito y quiero sacar */
    } else if (itemSearched && query === "del") {
      body.amount = body.amount - 1;
  
      await Cart.findByIdAndUpdate(itemId, body, {
        new: true,
      }).then((item) =>
        res.json({
          mensaje: `The item: ${item.name} was updated`,
          item,
        })
      );
    } else {
      res.status(400).json({ mensaje: "Error" });
    }
  },
}
module.exports = controller
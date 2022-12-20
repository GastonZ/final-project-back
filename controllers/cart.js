const Cart = require("../models/Cart");
const Item = require('../models/Items')

const controller = {
 addItemCart : async (req, res) => {
  const { name, image, price, userId } = req.body;

  /* Nos fijamos si tenemos el Item */
  const itsInItems = await Item.findOne({ name });

  /* Nos fijamos si todos los campos vienen con info */
  const isntEmpty = name !== "" && image !== "" && price !== "" && userId !== "";

  /* Nos fijamos si el Item ya esta en el carrito */
  const itsInTheCart = await Cart.findOne({ name });
  const userCart = await Cart.findOne({ userId,name });
  /* Si no tenemos el Item */

  if (!itsInItems) {
    res.status(400).json({
      mensaje: "This Item doesn´t exist in our data base ",
    });

    /* Si nos envian algo y no esta en el carrito lo agregamos */
  } else if (isntEmpty && !itsInTheCart) {
    const newItemInCart = new Cart({ name, image, price, amount: 1, userId });

    /* Y actualizamos la prop inCart: true en nuestros Items */
    await Item.findByIdAndUpdate(
      itsInItems?._id,
      { inCart: true, name, image, price, userId },
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
  } else if (!userCart) {
    const newItemInCart = new Cart({ name, image, price, amount: 1, userId });
    newItemInCart.save();

    res.json({
      mensaje: "The new Item has been added to the cart"
    });
  } else if (userCart) {
    res.json({
      mensaje: "The item is already in the cart",
    });
  }
},

increaseAmount : async (req, res) =>{

  const { itemId } = req.params;

  const body = req.body;

  /* Buscamos el item en el carrito */
  const itemSearched = await Cart.findById(itemId);

  if (itemSearched) {

    body.amount + 1 ;
    console.log(body.amount);
    await Cart.findByIdAndUpdate(itemId, body, {
      new: true,
    }).then((item) => {
      res.json({
        mensaje: `The item: ${item.name} was updated`,
        item,
      });
    });

  } 


},

//*
deleteItem : async (req, res) => {
    const { itemId } = req.params;
  
    /* Buscamos el item en el carrito */
    const itemInCart = await Cart.findById(itemId);
  
    /* Buscamos el item en nuestra DB por el nombre del que esta en el carrito */
    const { name, image, price, _id } = await Item.findOne({
      name: itemInCart.name,
    });
  
    /* Buscamos y eliminamos el item con la id */
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
  
    /* Buscamos el item en el carrito */
    const itemSearched = await Cart.findById(itemId);
  
    /* Si no hay query 'add' o 'del' */
    if (!query) {
      res.status(404).json({ message: "You must send a query" });
  
      /* Si esta el item en el carrito y quiero agregar */
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
  
      /* Si esta el item en el carrito y quiero sacar */
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
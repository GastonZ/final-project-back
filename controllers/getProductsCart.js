const Cart = require("../models/Cart");

const getProductsCart = async (req, res) => {
  const productsCart = await Cart.find();

  if (productsCart) {
    res.json({ productsCart });
  } else {
    res.json({ menssage: "There aren´t products in the cart" });
  }
};

module.exports = getProductsCart;
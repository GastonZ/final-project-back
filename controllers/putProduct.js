const Cart = require("../models/Cart");

const putProduct = async (req, res) => {
  const { productId } = req.params;
  const { query } = req.query;
  const body = req.body;

  /* Buscamos el producto en el carrito */
  const productSearched = await Cart.findById(productId);

  /* Si no hay query 'add' o 'del' */
  if (!query) {
    res.status(404).json({ mensaje: "You must send a query" });

    /* Si esta el producto en el carrito y quiero agregar */
  } else if (productSearched && query === "add") {
    body.amount = body.amount + 1;

    await Cart.findByIdAndUpdate(productId, body, {
      new: true,
    }).then((product) => {
      res.json({
        mensaje: `The product: ${product.name} was updated`,
        product,
      });
    });

    /* Si esta el producto en el carrito y quiero sacar */
  } else if (productSearched && query === "del") {
    body.amount = body.amount - 1;

    await Cart.findByIdAndUpdate(productId, body, {
      new: true,
    }).then((product) =>
      res.json({
        mensaje: `The product: ${product.name} was updated`,
        product,
      })
    );
  } else {
    res.status(400).json({ mensaje: "Error" });
  }
};

module.exports = putProduct;
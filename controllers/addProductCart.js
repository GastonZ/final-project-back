const Cart = require("../models/Cart");
const Product = require("../models/Product");

const addProductCart = async (req, res) => {
  const { name, image, price } = req.body;

  /* Nos fijamos si tenemos el producto */
  const itsInProducts = await Product.findOne({ name });

  /* Nos fijamos si todos los campos vienen con info */
  const isntEmpty = name !== "" && image !== "" && price !== "";

  /* Nos fijamos si el producto ya esta en el carrito */
  const itsInTheCart = await Cart.findOne({ name });

  /* Si no tenemos el producto */
  if (!itsInProducts) {
    res.status(400).json({
      mensaje: "EThis product doesn´t exist in our data base ",
    });

    /* Si nos envian algo y no esta en el carrito lo agregamos */
  } else if (isntEmpty && !itsInTheCart) {
    const newProductInCart = new Cart({ name, image, price, amount: 1 });

    /* Y actualizamos la prop inCart: true en nuestros productos */
    await Product.findByIdAndUpdate(
      itsInProducts?._id,
      { inCart: true, name, image, price },
      { new: true }
    )
      .then((product) => {
        newProductInCart.save();
        res.json({
          mensaje: `The product has been added to the cart`,
          product,
        });
      })
      .catch((error) => console.error(error));

    /* Y si esta en el carrito avisamos */
  } else if (itsInTheCart) {
    res.status(400).json({
      mensaje: "The pruduct is in the cart",
    });
  }
};

module.exports = addProductCart;
const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const products = await Product.find();

  if (products) {
    res.json({ products });
  } else {
    res.json({ menssage: "No products found" });
  }
};

module.exports = getProducts;
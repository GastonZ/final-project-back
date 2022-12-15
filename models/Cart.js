const { model, Schema } = require("mongoose");

const CartSchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  amount: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = model("Cart", CartSchema);
const { model, Schema, mongoose} = require("mongoose");

const CartSchema = new Schema({
  title: { type: String, required: true, unique: false },
  picture_url: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit_price: { type: Number, required: true },
  userId:{type: mongoose.Types.ObjectId, ref:"users" ,required: true}
});

module.exports = model("Cart", CartSchema);
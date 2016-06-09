var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  orderDate: {type: Date, default: Date.now()},
  productsOrdered: [{
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    qty: {type: Number, min: 1}
  }],
  // shippingAddress: {
  //     street: {type: String, required: true},
  //     city: {type: String, required: true},
  //     state: {type: String, required: true},
  //     zip: {type: Number, required: true}
  // },
  shippingAddress: {type: Schema.Types.ObjectId, ref: 'User'},
  totalPrice: {type: Number}
});

module.exports = mongoose.model("Order", orderSchema);

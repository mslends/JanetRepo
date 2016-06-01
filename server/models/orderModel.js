var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  productsOrdered: [{
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    qty: {type: Number, min: 1}
  }],
  totalPrice: {type: String}

});

module.exports = mongoose.model("Order", orderSchema);

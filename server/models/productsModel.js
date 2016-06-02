var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {type: String},
  description: {type: String},
  seller: {type: String},
  retailPrice: {type: String},
  discountPrice: {type: String},
  qty: {type: Number},
  images: {type: String},
  color: {type: String},
  size: {type: String},
  material: {type: String},
  // userReviews: [{type: Schema.Types.ObjectId, ref: 'User'}],
  category: {type: String},
  favorites: {type: Number},
  amntSold: {type: Number},
  parent: {type: String}
});

module.exports = mongoose.model("Product", productSchema);

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {type: String},
  description: {type: String},
  seller: {type: String},
  retailPrice: {type: Number},
  discountPrice: {type: Number},
  qty: {type: Number},
  images: {type: String},
  color: {type: String},
  size: {type: String},
  material: {type: String},
  // userReviews: [{type: Schema.Types.ObjectId, ref: 'User'}],
  category: {type: String},
  favorites: {type: Number, default: 0},
  amntSold: {type: Number, default: 0},
  parent: {type: String},
  startDate: {type: Date},
  endDate: {type: Date}
});

module.exports = mongoose.model("Product", productSchema);

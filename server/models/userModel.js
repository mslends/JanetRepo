var mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: {type: Boolean, default: false},
    phone: {type: String},
    // billingAddress: {
    //     street: {type: String},
    //     city: {type: String},
    //     state: {type: String},
    //     zip: {type: Number}
    // },
    shippingAddress: {
        street: {type: String, default: null},
        city: {type: String, default: null},
        state: {type: String, default: null},
        zip: {type: Number, default: null}
    },
    wishlist: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    // myReviews: [{
    //     ratings: {type: Number, min:1, max: 5},
    //     comments: {type: String},
    //     product: {type: Schema.Types.ObjectId, ref: 'Product'}
    // }],
    orderHistory: [{type: Schema.Types.ObjectId, ref: 'Order'}]
    // gender: {type: String}

});

userSchema.methods.generateHash = function(password){
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(7), null);
};


userSchema.methods.validPassword = function(password){
  return bcryptjs.compareSync(password, this.password);
};



module.exports = mongoose.model('User', userSchema);

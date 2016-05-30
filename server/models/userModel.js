var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    admin: {type: Boolean, default: false},
    phone: {type: String},
    billingAddress: {
        street: {type: String},
        city: {type: String},
        state: {type: String},
        zip: {type: String}
    },
    shippingAddress: {
        street: {type: String},
        city: {type: String},
        state: {type: String},
        zip: {type: String}
    },
    wishlist: [{
        type: Schema.Types.ObjectId, ref: 'Product'
    }],
    // myReviews: [{
    //     ratings: {type: Number, min:1, max: 5},
    //     comments: {type: String},
    //     product: {type: Schema.Types.ObjectId, ref: 'Product'}
    // }],
    purchaseHistory: [{
        purchasedProduct: {type: Schema.Types.ObjectId, ref: 'Product'},
        purchaseDate: {type: Date}
    }]
    // gender: {type: String}

});


module.exports = mongoose.model('User', userSchema);

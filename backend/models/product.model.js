const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ID = require('uuid');

let ObjectID = Schema.Types.ObjectId;

const ProductSchema = new Schema({
    productDetails: {
        category: String,
        productName: String,
        productImg: String,
        price: Number,
        productColor: String,
        id: String
    },
    cartDetails: {
        quantity: {type: Number, default: 0},
        cartAdded: {type: Boolean, default: false}
    }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
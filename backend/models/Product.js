const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String},
    imageUrl: {type: String, required: true},
    stock: {type: Number, required: true},
    dateCreated: {type: Date, default: Date.now},
    dateModified: {type: Date}
});

module.exports = mongoose.model('Product', productSchema);
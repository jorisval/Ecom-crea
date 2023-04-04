const mongoose = require('mongoose');

const portfolioShopSchema = mongoose.Schema({
    imageUrl: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('PortfolioShop', portfolioShopSchema);
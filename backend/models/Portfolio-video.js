const mongoose = require('mongoose');

const portfolioVideoSchema = mongoose.Schema({
    videoUrl: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('PortfolioVideo', portfolioVideoSchema);
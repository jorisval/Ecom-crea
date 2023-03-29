const mongoose = require('mongoose');

const clientResultSchema = mongoose.Schema({
    imageUrl: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now},
});

module.exports = mongoose.model('ClientResult', clientResultSchema);
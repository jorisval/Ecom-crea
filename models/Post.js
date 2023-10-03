const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true},
    title: {type: String, required: true},
    imageUrl: {type: String, required: true},
    content: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now},
    dateModified: {type: Date}
});

module.exports = mongoose.model('Post', postSchema);
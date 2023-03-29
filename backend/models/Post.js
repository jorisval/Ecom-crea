const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    authorId: {type: String, required: true},
    title: {type: String, required: true},
    imageUrl: {type: String, required: true},
    content: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now},
    dateModified: {type: Date}
});

module.exports = mongoose.model('Post', postSchema);
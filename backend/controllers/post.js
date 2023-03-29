const Post = require('../models/Post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
    const postObject = req.body;
    const post = new Post({
        ...postObject,
        imageUrl: req.protocol+'://'+req.get('host')+'/images/posts/'+req.file.filename
    });
    post.save()
    .then(() => res.status(201).json({ message: 'Post saved !'}))
    .catch(error => res.status(400).json({ error }));
}
exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));
}
exports.modifyPost = (req, res, next) => {
    const postObject = req.file ? {
        ...JSON.parse(req.body.post),
        imageUrl: req.protocol+'://'+req.get('host')+'/images/posts/'+req.file.filename
    } : { ...req.body };
    Post.findOne({ _id: req.params.id })
    .then(() => {
        Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post modified !' }))
        .catch(error => res.status(401).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
}
exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
    .then(post => {
        const filename = post.imageUrl.split('/images/posts/')[1];
        fs.unlink('images/posts/'+ filename, () => {
            Post.deleteOne({_id: req.params.id})
            .then(() => res.status(200).json({ message: 'Post deleted!' }))
            .catch(error => res.status(401).json({ error }));
        })
    })
    .catch(error => res.status(401).json({error }));
}
exports.getAllPosts = (req, res, next) => {
    Post.find()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
}
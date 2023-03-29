const express = require('express');
const postCtrl = require('../controllers/post');
const {multerPostImage} = require('../midleware/multer-config');
const router = express.Router();

router.post('/', multerPostImage, postCtrl.createPost);
router.get('/:id', postCtrl.getOnePost);
router.put('/:id', multerPostImage, postCtrl.modifyPost);
router.delete('/:id', postCtrl.deletePost);
router.get('/', postCtrl.getAllPosts);

module.exports = router;
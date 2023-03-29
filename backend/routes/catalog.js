const express = require('express');
const catalogCtrl = require('../controllers/catalog');
const {multerProductImage} = require('../midleware/multer-config');
const router = express.Router();

router.post('/', multerProductImage, catalogCtrl.createProduct);
router.get('/:id', catalogCtrl.getOneProduct);
router.put('/:id', multerProductImage, catalogCtrl.modifyProduct);
router.delete('/:id', catalogCtrl.deleteProduct);
router.get('/', catalogCtrl.getAllProducts);

module.exports = router;
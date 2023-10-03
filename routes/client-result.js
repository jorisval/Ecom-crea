const express = require('express');
const ClientResultCtrl = require('../controllers/client-result');
const {multerClientResultImage} = require('../midleware/multer-config');
const router = express.Router();

router.post('/', multerClientResultImage, ClientResultCtrl.createClientResult);
router.get('/:id', ClientResultCtrl.getOneClientResult);
router.delete('/:id', ClientResultCtrl.deleteClientResult);
router.get('/', ClientResultCtrl.getAllClientResults);

module.exports = router;
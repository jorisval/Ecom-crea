const express = require('express');
const PortfolioVideoCtrl = require('../controllers/portfolio-video');
const {multerPortfolioVideo} = require('../midleware/multer-config');
const router = express.Router();

router.post('/', multerPortfolioVideo, PortfolioVideoCtrl.createPortfolioVideo);
router.get('/:id', PortfolioVideoCtrl.getOnePortfolioVideo);
router.delete('/:id', PortfolioVideoCtrl.deletePortfolioVideo);
router.get('/', PortfolioVideoCtrl.getAllPortfolioVideos);

module.exports = router;
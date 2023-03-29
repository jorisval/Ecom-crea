const express = require('express');
const PortfolioShopCtrl = require('../controllers/portfolio-shop');
const {multerPortfolioShop} = require('../midleware/multer-config');
const router = express.Router();

router.post('/', multerPortfolioShop, PortfolioShopCtrl.createPortfolioShop);
router.get('/:id', PortfolioShopCtrl.getOnePortfolioShop);
router.delete('/:id', PortfolioShopCtrl.deletePortfolioShop);
router.get('/', PortfolioShopCtrl.getAllPortfolioShops);

module.exports = router;
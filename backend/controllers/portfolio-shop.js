const PortfolioShop = require('../models/portfolio-shop');
const fs = require('fs');

exports.createPortfolioShop = (req, res, next) => {
    const imageUrls = req.files.map(file =>
        req.protocol+'://'+req.get('host')+'/images/portfolio-shops/'+file.filename
    );
    const portfolioShopPromises = imageUrls.map(imageUrl => {
            const portfolioShop = new PortfolioShop({ imageUrl });
            portfolioShop.save();
    });
    Promise.all(portfolioShopPromises)
    .then(() => res.status(201).json({ message: 'Portfolio shops saved !'}))
    .catch(error => res.status(400).json({ error }));
}
exports.getOnePortfolioShop = (req, res, next) => {
    PortfolioShop.findOne({ _id: req.params.id })
    .then(portfolioShop => res.status(200).json(portfolioShop))
    .catch(error => res.status(404).json({ error }));
}
exports.deletePortfolioShop = (req, res, next) => {
    PortfolioShop.findOne({ _id: req.params.id })
    .then(portfolioShop => {
        const filename = portfolioShop.imageUrl.split('/images/portfolio-shops/')[1];
        fs.unlink('images/portfolio-shops/'+ filename, () => {
            PortfolioShop.deleteOne({_id: req.params.id})
            .then(() => res.status(200).json({ message: 'Portfolio shop deleted!' }))
            .catch(error => res.status(401).json({ error }));
        })
    })
    .catch(error => res.status(401).json({error }));
}
exports.getAllPortfolioShops = (req, res, next) => {
    PortfolioShop.find()
    .then(portfolioShop => res.status(200).json(portfolioShop))
    .catch(error => res.status(400).json({ error }));
}
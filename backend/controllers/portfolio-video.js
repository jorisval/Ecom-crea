const PortfolioVideo = require('../models/portfolio-video');
const fs = require('fs');

exports.createPortfolioVideo = (req, res, next) => {
    const videoUrls = req.files.map(file =>
        req.protocol+'://'+req.get('host')+'/videos/portfolio-videos/'+file.filename
    );
    const portfolioVideoPromises = videoUrls.map(videoUrl => {
            const portfolioVideo = new PortfolioVideo({ videoUrl });
            portfolioVideo.save();
    });
    Promise.all(portfolioVideoPromises)
    .then(() => res.status(201).json({ message: 'Portfolio videos saved !'}))
    .catch(error => res.status(400).json({ error }));
}
exports.getOnePortfolioVideo = (req, res, next) => {
    PortfolioVideo.findOne({ _id: req.params.id })
    .then(portfolioVideo => res.status(200).json(portfolioVideo))
    .catch(error => res.status(404).json({ error }));
}
exports.deletePortfolioVideo = (req, res, next) => {
    PortfolioVideo.findOne({ _id: req.params.id })
    .then(portfolioVideo => {
        const filename = portfolioVideo.videoUrl.split('/videos/portfolio-videos/')[1];
        fs.unlink('videos/portfolio-videos/'+ filename, () => {
            PortfolioVideo.deleteOne({_id: req.params.id})
            .then(() => res.status(200).json({ message: 'Portfolio video deleted!' }))
            .catch(error => res.status(401).json({ error }));
        })
    })
    .catch(error => res.status(401).json({error }));
}
exports.getAllPortfolioVideos = (req, res, next) => {
    PortfolioVideo.find()
    .then(portfolioVideo => res.status(200).json(portfolioVideo))
    .catch(error => res.status(400).json({ error }));
}
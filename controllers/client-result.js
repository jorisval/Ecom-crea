const ClientResult = require('../models/Client-result');
const fs = require('fs');

exports.createClientResult = (req, res, next) => {
    const imageUrls = req.files.map(file =>
        req.protocol+'://'+req.get('host')+'/images/client-results/'+file.filename
    );
    const clientResultPromises = imageUrls.map(imageUrl => {
            const clientResult = new ClientResult({ imageUrl });
            clientResult.save();
    });
    Promise.all(clientResultPromises)
    .then(() => res.status(201).json({ message: 'Client Results saved !'}))
    .catch(error => res.status(400).json({ error }));
}
exports.getOneClientResult = (req, res, next) => {
    ClientResult.findOne({ _id: req.params.id })
    .then(clientResult => res.status(200).json(clientResult))
    .catch(error => res.status(404).json({ error }));
}
exports.deleteClientResult = (req, res, next) => {
    ClientResult.findOne({ _id: req.params.id })
    .then(clientResult => {
        const filename = clientResult.imageUrl.split('/images/client-results/')[1];
        fs.unlink('images/client-results/'+ filename, () => {
            ClientResult.deleteOne({_id: req.params.id})
            .then(() => res.status(200).json({ message: 'Client result deleted!' }))
            .catch(error => res.status(401).json({ error }));
        })
    })
    .catch(error => res.status(401).json({error }));
}
exports.getAllClientResults = (req, res, next) => {
    ClientResult.find()
    .then(clientResults => res.status(200).json(clientResults))
    .catch(error => res.status(400).json({ error }));
}
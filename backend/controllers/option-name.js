const OptionName = require('../models/Option-name');

exports.createOptionName = (req, res, next) => {
    const optionNameObject = req.body;
    const optionName = new OptionName({
        ...optionNameObject,
    });
    optionName.save()
    .then(() => res.status(201).json({ message: 'Option saved !'}))
    .catch(error => res.status(400).json({ error }));
}
exports.getOneOptionName = (req, res, next) => {
    OptionName.findOne({ _id: req.params.id })
    .then(optionName => res.status(200).json(optionName))
    .catch(error => res.status(400).json({ error }));
}
exports.modifyOptionName = (req, res, next) => {
    const optionNameObject = { ...req.body };
    OptionName.findOne({ _id: req.params.id })
    .then(() => {
        OptionName.updateOne({ _id: req.params.id }, { ...optionNameObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Option updated !' }))
        .catch(error => res.status(401).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
}
exports.deleteOptionName = (req, res, next) => {
    OptionName.findOne({ _id: req.params.id })
    .then(() => {
        OptionName.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({ message: 'Option deleted!' }))
        .catch(error => res.status(401).json({ error }));
    })
    .catch(error => res.status(401).json({error }));
}
exports.getAllOptionNamesOfAProduct = (req, res, next) => {
    OptionName.find({ productId: req.params.productId })
    .then(optionNames => res.status(200).json(optionNames))
    .catch(error => res.status(400).json({ error }));
}
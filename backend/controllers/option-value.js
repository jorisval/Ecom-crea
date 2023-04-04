const OptionValue = require('../models/Option-value');

exports.createOptionValue = (req, res, next) => {
    const optionValueObject = req.body;
    const optionValue = new OptionValue({
        ...optionValueObject,
    });
    optionValue.save()
    .then(() => res.status(201).json({ message: 'Option Value saved !'}))
    .catch(error => res.status(400).json({ error }));
}
exports.getOneOptionValue = (req, res, next) => {
    OptionValue.findOne({ _id: req.params.id })
    .then(optionValue => res.status(200).json(optionValue))
    .catch(error => res.status(400).json({ error }));
}
exports.modifyOptionValue = (req, res, next) => {
    const optionValueObject = { ...req.body };
    OptionValue.findOne({ _id: req.params.id })
    .then(() => {
        OptionValue.updateOne({ _id: req.params.id }, { ...optionValueObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Option value updated !' }))
        .catch(error => res.status(401).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
}
exports.deleteOptionValue = (req, res, next) => {
    OptionValue.findOne({ _id: req.params.id })
    .then(() => {
        OptionValue.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({ message: 'Option value deleted!' }))
        .catch(error => res.status(401).json({ error }));
    })
    .catch(error => res.status(401).json({error }));
}
exports.getAllValuesOfAnOption = (req, res, next) => {
    OptionValue.find({ optionNameId: req.params.optionNametId })
    .then(optionValues => res.status(200).json(optionValues))
    .catch(error => res.status(400).json({ error }));
}
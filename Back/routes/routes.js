const express = require('express');
const {
    toNamespacedPath
} = require('path');
const router = express.Router()
const Cat = require('../models/monmodele')



router.post('/', async function (req, res) {
    const newCat = new Cat({
        name: req.body.name,
        sex: req.body.sex,
        icad: req.body.icad,
        ddn: req.body.ddn,
        loof: req.body.loof,
        testg: req.body.testg,
        testm: req.body.testm,
        dvac: req.body.dvac,
        dver: req.body.dver,
    });
    await newCat.save();
    res.status(201).send({
        message: 'Successfully created a new cat ! ',
    })
});

router.delete('/', async function deleteCat(req, res) {
    await Cat.deleteOne({
        _id: req.body.id,
    });
    res.status(201).send({
        message: 'Deleted successfully the cat',
    })

});

router.put('/', async function updateCat(req, res) {
    const id = req.body.id

    const updateCat = {
        name: req.body.name,
        sex: req.body.sex,
        icad: req.body.icad,
        ddn: req.body.ddn,
        loof: req.body.loof,
        testg: req.body.testg,
        testm: req.body.testm,
        dvac: req.body.dvac,
        dver: req.body.dver
    };

    await Cat.findOneAndUpdate({
        _id: id
    }, updateCat, {
        returnOriginal: false
    });
    res.status(201).send({
        message: 'Updated successfully the cat',
    })
})


module.exports = router;
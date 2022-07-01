const express = require('express');
const router = express.Router()
const Cat = require('../models/monmodele')

router.get('/', function(res,req){
    res.send("ok")
})

router.post('/', async function (req, res){
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
    })});
module.exports =router;
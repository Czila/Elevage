import React from 'react'
const fs = require('fs');
const path = require('path');
const Router = require('express').Router();

let cats = [];

const pathToData = path.join(__dirname, '../data/cats.json');

Router.post('/', (req, res) => {
    cats.push({
      name: req.body.name,
      sex: req.body.sex,
      icad: req.body.icad,
      ddn: req.body.ddn,
      loof: req.body.loof,
      testg: req.body.testg,
      testm: req.body.testm,
      dvac: req.body.dvac,
      dver: req.body.dver,
    })
    const catsString = JSON.stringify(cats);
  
    fs.writeFile(pathToData, catsString, (err) => {
      if (err)
        return res.status(500).send({ message: 'Error writing into the DB' });
    });
  
    res.status(201).send({
      message: 'Successfully created a new cat ! ',
      data: {
        cats,
      },
    });});
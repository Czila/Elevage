const mongoose = require('mongoose');
const url = "mongodb+srv://Czila:admin@sofia.ykpvv.mongodb.net/Elevage";

async function toConnect() {
  try {
    const conn = await mongoose.connect(url);
    console.log('Connected to my DB on Atlas');


  } catch (err) {
    console.error(err.message);
  }
};

module.exports= toConnect;
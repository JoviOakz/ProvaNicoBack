const mongoose = require('mongoose');
const config = require('config')

module.exports = function () {
    const db = process.env.DB_URL;
    mongoose
      .connect(db, {  })
      .then(() => console.log(`connected to ${db}`));
  };
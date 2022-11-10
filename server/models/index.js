const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(`mongodb://localhost:27017/${config.dbName}`).then(
  () => { console.log('Database is connected.'); },
  err => { console.error(err); }
);

module.exports = mongoose;
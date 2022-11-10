const mongoose = require('./index');

const Schema = mongoose.Schema;

const WantListSchema = new Schema({
  email: String,
  text: String,
});

const WantList = mongoose.model('WantList', WantListSchema);

module.exports = WantList;
const mongoose = require('./index');

const Schema = mongoose.Schema;

const CharityListSchema = new Schema({
  email: String,
  text: String,
});

const CharityList = mongoose.model('CharityList', CharityListSchema);

module.exports = CharityList;
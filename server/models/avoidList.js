const mongoose = require('./index');

const Schema = mongoose.Schema;

const AvoidListSchema = new Schema({
  email: String,
  text: String,
});

const AvoidList = mongoose.model('AvoidList', AvoidListSchema);

module.exports = AvoidList;
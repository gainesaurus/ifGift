const mongoose = require('./index');

const Schema = mongoose.Schema;

const GiftListSchema = new Schema({
  createdBy: String,
  collaborators: String,
  recipient: String,
  text: String,
});

const GiftList = mongoose.model('GiftList', GiftListSchema);

module.exports = GiftList;
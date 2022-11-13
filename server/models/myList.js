const mongoose = require('./index');

const Schema = mongoose.Schema;

const MyListSchema = new Schema({
  createdBy: String,
  collaborators: String,
  recipient: String,
  text: String,
});

const GiftList = mongoose.model('MyList', MyListSchema);

module.exports = MyList;
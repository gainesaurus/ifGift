const mongoose = require('./index');

const Schema = mongoose.Schema;

const MyListSchema = new Schema({
  createdBy: String,
  collaborators: [String],
  recipient: String,
  text: String,
  lastEdited: String,
  createdOn: String
});

const GiftList = mongoose.model('MyList', MyListSchema);

module.exports = MyList;
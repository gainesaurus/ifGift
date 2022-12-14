const mongoose = require('./index');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  profilePic: Buffer,
  name: String,
  userName: String,
  pronouns: String,
  email: String,
  birthday: String,
  address: String,
  giftPref: String,
  wantList: String,
  avoidList: String,
  charityList: String,
  registryList: String,
  friendList: String
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
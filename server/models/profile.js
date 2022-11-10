const mongoose = require('./index');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  firstName: String,
  lastName: String,
  birthDate: String,
  email: String,
  address: String,
  city: String,
  country: String,
  giftPreference: String,
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
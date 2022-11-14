const Profile = require('../models/profile');

exports.getProfileInfo = async (ctx) => {
  try {
    const result = await Profile.findOne({email:ctx.request.body.email});
    ctx.body = result;
    ctx.status = 200;
  } catch (error) {
    console.log('Get request error in profile controller');
    ctx.status = 500;
  }
};

exports.insertProfile = async (ctx) => {
  try {
    let profile = await Profile.findOne({email:ctx.request.body.email});
    if (!profile) {
      profile = await Profile.create(ctx.request.body);
    }
    ctx.body = profile;
    ctx.status = 201;
  } catch (error) {
    console.log('Error creating profile in controller');
    ctx.status = 400;
  }
};

exports.updateProfile = async (ctx) => {
  try {
    ctx.status = 200;
  } catch (error) {
    console.log('Error updating profile in controller.')
    ctx.status = 400;
  }
}
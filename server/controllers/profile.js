const Profile = require('../models/profile');

exports.getProfileInfo = async (ctx) => {
  try {
    const result = await Profile.find();
    ctx.send(result);
    ctx.status(200);
  } catch (error) {
    console.log('Error in profile controller');
    ctx.status(500);
  }
};

exports.insertProfile = async (req, res) => {
  if (ctx.body.firstName && ctx.body.lastName && ctx.body.email && ctx.body.giftPreference) {
    try {
      const newProfile = await Event.create(ctx.body);
      ctx.send(newProfile);
      ctx.status(201);
    } catch (error) {
      console.log('Error creating profile in controller');
      ctx.status(400).send();
    }
  } else {
    console.log('Error with profile inputs');
    ctx.status(400).send();
  }
};
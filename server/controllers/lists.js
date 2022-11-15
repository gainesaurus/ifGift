const MyList = require('../models/myList');


exports.fetchMyLists = async (ctx) => {
  try {
    const result = await MyList.find({createdBy: ctx.request.body.email});
  
    ctx.status= 200;
  } catch (error) {
    console.error(error);
    ctx.status = 500;
  }
}

exports.insertList = async (ctx) => {
  try {
    const newList = await MyList.create({createdBy: ctx.request.body._id});
    ctx.status = 201;
  } catch (error) {
    console.error(error);
    ctx.status = 400;
  }
}
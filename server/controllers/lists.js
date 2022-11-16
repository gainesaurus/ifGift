const MyList = require('../models/myList');


exports.fetchMyLists = async (ctx) => {
  try {
    const result = await MyList.find({createdBy: ctx.params.userId});
    ctx.body = result;
    ctx.status= 200;
  } catch (error) {
    console.error(error);
    ctx.status = 500;
  }
}

exports.insertList = async (ctx) => {
  try {
    await MyList.create({createdBy: ctx.params.userId});
    ctx.status = 201;
  } catch (error) {
    console.error(error);
    ctx.status = 400;
  }
}

exports.findByIdAndUpdate = async (ctx) => {
  try {
    await MyList.findOneAndUpdate({_id: ctx.params.id}, { ...ctx.request.body })
    ctx.status = 200;
  } catch (error) {
    console.error(error);
    ctx.status = 400;
  }
}

exports.deleteList = async (ctx) => {
  try {
    await MyList.findOneAndRemove({_id: ctx.params.id})
    ctx.status = 200;
  } catch (error) {
    console.error(error);
    ctx.status = 400;
  }
}
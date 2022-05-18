const express = require("express");
const db = require("../models/index");
const router = express.Router({ mergeParams: true});

const createDatapoint = async function(req, res, next){
  try{
    let datapoint = await db.Datapoint.create({
      user: req.params.id,
      name: req.body.name,
      age: req.body.age,
      measureBefore: req.body.measureBefore,
      measureAfter: req.body.measureAfter,
      drug: req.body.drug,
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.datapoints.push(datapoint.id);
    await foundUser.save();
    let foundDatapoint= await db.Datapoint.findById(datapoint._id).populate("user", {
      username: true
    });
    return res.status(200).json(foundDatapoint);
  } catch(err) {
    return next(err)
  }
}

const getAllDatapoints = async function(req, res,next){
  try{
    let datapoints = await db.Datapoint.find({user: req.params.id})
    return res.status(200).json(datapoints);
  } catch(err) {
    return next(err);
  }
}

const deleteDatapoint = async function(req, res, next){
  try {
    let foundDatapoint = await db.Datapoint.findById(req.params.datapoint_id);
    await foundDatapoint.remove()
    return res.status(200).json(foundDatapoint);
  } catch (err) {
    return next(err);
  }
}

router
  .route("/")
  .post(createDatapoint)
  .get(getAllDatapoints);

router
  .route("/:datapoint_id")
  .delete(deleteDatapoint);


module.exports = router;
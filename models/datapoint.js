const mongoose = require("mongoose");
const User = require("./user");
const db = require("../models/index");

const datapointSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age : {
    type: Number,
    required: true
  },
  drug: {
    type: String,
    required: true
  },
  measureBefore: {
    type: Number,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    required: true
  },
  measureAfter: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
})

//This function removes the dataset from associated entries
datapointSchema.pre("remove", async function(next){
  try{
    //Remove dataset from associated user
    let user = await User.findById(this.user);
    user.datapoints.remove(this.id);
    await user.save();
    return next();
  } catch(err){
      return next(err);
  }
})



const Datapoint = mongoose.model("Datapoint", datapointSchema);
module.exports = Datapoint;
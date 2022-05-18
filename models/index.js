const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.set("debug", true);

mongoose.connect(process.env.MONGO_DB_URI || "mongodb://localhost/data-processor", {
  keepAlive: true,
  useNewUrlParser: true,

})
.then(() => console.log("Connected to DB"))
.catch(err => console.log(err));

module.exports.User = require("./user");
module.exports.Datapoint = require("./datapoint");

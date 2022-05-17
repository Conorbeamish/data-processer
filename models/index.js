const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB_URI || "mongodb://localhost/data-processor", {
  keepAlive: true,
})
.then(() => console.log("Connected to DB"))
.catch(err => console.log(err));

module.exports.User = require("./user");
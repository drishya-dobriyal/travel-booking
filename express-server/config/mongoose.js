const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/project");

const db = mongoose.connection;

db.on("error", console.error.bind(console, `Error connecing to mongoose`));

db.once("open", function () {
  console.log("Sucessfully connected to database");
});

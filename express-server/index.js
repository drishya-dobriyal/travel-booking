const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes"));

app.listen(PORT, function (err) {
  if (err) console.log(`Error in running app: ${err}`);
  console.log(`App listening at port ${PORT}`);
});
module.exports = app;

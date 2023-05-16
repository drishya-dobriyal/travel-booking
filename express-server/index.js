const express = require("express");

const app = express();
const PORT = 8000;

app.use("/", require("./routes"));

app.listen(PORT, function (err) {
  if (err) console.log(`Error in running app: ${err}`);
  console.log(`App listening to App at port ${PORT}`);
});

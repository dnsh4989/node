const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey this is NodeJs");
});

app.listen(5000, () => {
  console.log("App started on port 5000");
});

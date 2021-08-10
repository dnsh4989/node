const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hey this is NodeJs");
});

app.listen(process.env.PORT || port, () => {
  console.log("App started on port " + port);
});

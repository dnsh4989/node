const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

module.exports = route;

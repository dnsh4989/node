const mongoose = require("mongoose");

const image = new mongoose.Schema({
  id: {
    type: String,
  },
  date: {
    type: String,
  },
  tags: {
    type: [String],
  },
  url: {
    type: String,
  },
});

module.exports = Image = mongoose.model("image", image);

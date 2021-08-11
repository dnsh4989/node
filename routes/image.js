const express = require("express");
const Image = require("../DB/image");
const route = express.Router();

route.get("/", (req, res) => {
  Image.find({}, (err, images) => {
    var imageMap = {};

    images.forEach(function (image) {
      imageMap[image._id] = image;
    });

    res.send(imageMap);
  });
});

route.post("/", async (req, res) => {
  const { url, id, date, tags } = req.body;
  let image = {};
  image.url = url;
  image.id = id;
  image.id = date;
  image.id = tags;
  let imageModel = new Image(image);
  await imageModel.save();
  res.json(imageModel);
});

module.exports = route;

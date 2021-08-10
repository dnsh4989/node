const express = require("express");
const { default: image } = require("next/image");
const app = express();
const port = 3000;

const images = [
  {
    id: 1,
    date: null,
    tags: [],
    url: "https://c.stocksy.com/a/t1k200/z9/653597.jpg",
  },
  {
    id: 2,
    date: null,
    tags: [],
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUiNQoh_HNRvDXDY9b-xZJh70Bm4xlKeu1cNLSFzDFbYpQ6Df14WxrA0ndM2YGEwu09E&usqp=CAU",
  },
  {
    id: 3,
    date: null,
    tags: [],
    url: "https://www.computerhope.com/jargon/r/random-dice.jpg",
  },
  {
    id: 4,
    date: null,
    tags: [],
    url: "https://thumbs.dreamstime.com/b/random-click-random-click-different-perspective-photo-mobile-photography-159695099.jpg",
  },
  {
    id: 5,
    date: null,
    tags: [],
    url: "https://www.computerhope.com/jargon/r/random-dice.jpg",
  },
  {
    id: 6,
    date: null,
    tags: [],
    url: "https://thumbs.dreamstime.com/b/random-click-random-click-different-perspective-photo-mobile-photography-159695099.jpg",
  },
  {
    id: 7,
    date: null,
    tags: [],
    url: "https://c.stocksy.com/a/t1k200/z9/653597.jpg",
  },
  {
    id: 8,
    date: null,
    tags: [],
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUiNQoh_HNRvDXDY9b-xZJh70Bm4xlKeu1cNLSFzDFbYpQ6Df14WxrA0ndM2YGEwu09E&usqp=CAU",
  },
  {
    id: 9,
    date: null,
    tags: [],
    url: "https://randomwordgenerator.com/img/picture-generator/53e1d1404f5aa414f1dc8460962e33791c3ad6e04e5077497c2a7cd4924ec7_640.jpg",
  },
  {
    id: 10,
    date: null,
    tags: [],
    url: "https://i.pinimg.com/736x/7a/15/52/7a155238ab97bf76ef1509f4a55242de.jpg",
  },
  {
    id: 11,
    date: null,
    tags: [],
    url: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: 12,
    date: null,
    tags: [],
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xucJkJLx2KNmmQ2Kd8b2db4kLbh_rYOzeQ&usqp=CAU",
  },
  {
    id: 13,
    date: null,
    tags: [],
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-yHiTNTgoog6FUUlg7p922nhRfovKf4I0GpECJfvTAL0bB-qdLt2XCRKmy6Kujye3GE&usqp=CAU",
  },
  {
    id: 14,
    date: null,
    tags: [],
    url: "https://i.pinimg.com/736x/7a/15/52/7a155238ab97bf76ef1509f4a55242de.jpg",
  },
  {
    id: 15,
    date: null,
    tags: [],
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-yHiTNTgoog6FUUlg7p922nhRfovKf4I0GpECJfvTAL0bB-qdLt2XCRKmy6Kujye3GE&usqp=CAU",
  },
  {
    id: 16,
    date: null,
    tags: [],
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xucJkJLx2KNmmQ2Kd8b2db4kLbh_rYOzeQ&usqp=CAU",
  },
  {
    id: 17,
    date: null,
    tags: [],
    url: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: 18,
    date: null,
    tags: [],
    url: "https://randomwordgenerator.com/img/picture-generator/53e1d1404f5aa414f1dc8460962e33791c3ad6e04e5077497c2a7cd4924ec7_640.jpg",
  },
];

app.get("/", (req, res) => {
  res.send("Hey this is NodeJs");
});

app.get("/images/", (req, res) => {
  res.send("Againsss");
});

app.listen(process.env.PORT || port, () => {
  console.log("App started on port " + port);
});

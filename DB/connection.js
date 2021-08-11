const mongoose = require("mongoose");
const URI =
  "mongodb+srv://dinu:1234@imagescluster.0b5sm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;

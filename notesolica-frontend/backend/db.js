const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://notes:notes@cluster6.9pjud65.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected");
  });
};

module.exports = connectToMongo;

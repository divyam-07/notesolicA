const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://notesolicA:notesoicA@cluster0.gvxcv1m.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI, () => {
    console.log("connected");
  });
};

module.exports = connectToMongo;

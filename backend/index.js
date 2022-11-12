const express = require("express");
const connectToMongo = require("./db");
connectToMongo();

const app = express();
const PORT = 1431 || process.env.PORT;

app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("notesolicA");
});

app.listen(PORT, () => {
  console.log("server running on localhost " + PORT);
});

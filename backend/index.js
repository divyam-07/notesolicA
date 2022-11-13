const express = require("express");
const connectToMongo = require("./db");
connectToMongo();

const app = express();
const PORT = 1431 || process.env.PORT;

app.use("/api/notes", require("./routes/notes"));
app.use("/api/user", require("./routes/user"));

app.get("/", (req, res) => {
  res.send("notesolicA");
});

app.listen(PORT, () => {
  console.log("server running on localhost " + PORT);
});

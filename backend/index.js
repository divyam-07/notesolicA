const express = require("express");

const app = express();
const PORT = 1431 || process.env.PORT;

app.listen(PORT, () => {
  console.log("server running on localhost " + PORT);
});

const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("go to fail");
});

module.exports = app;

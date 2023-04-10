const express = require("express");

const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "From API" });
});

app.listen(port);

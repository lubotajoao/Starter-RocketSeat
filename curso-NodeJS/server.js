const express = require("express");
const mongoose = require("mongoose");

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (request, response) => {
  response.send("Bonjour le monde !!!");
});

app.listen(3001);

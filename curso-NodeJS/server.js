const express = require("express");
const mongoose = require("mongoose");

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Primeira Rota
app.get("/", (request, response) => {
  response.send("Coucou!!!");
});

app.listen(3001);

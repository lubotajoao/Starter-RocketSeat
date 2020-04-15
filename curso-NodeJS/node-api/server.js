// Importando o express
const express = require("express");
const mongoose = require("mongoose");

// Inciando o App
const app = express();

// Iniciando o DataBase
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Primeira rota
app.get("/", (request, response) => {
  response.send("Hello World");
});

app.listen(3001);

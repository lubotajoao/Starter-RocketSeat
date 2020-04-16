// Importando o express
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

/**
 * Inciando o App
 */
const app = express();
app.use(express.json()); // sinaliza o envio de dados no formato json (metodo post)

// Iniciando o DataBase
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir("./src/models");

//const Product = mongoose.model("Product");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);

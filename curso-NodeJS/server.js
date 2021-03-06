const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Efetivando a criação do model da aplicação
requireDir("./src/models");

// Rotas
//  use e' um curringa que recebera' todo tipo de requisicao
app.use("/api", require("./src/routes"));

app.listen(30013);

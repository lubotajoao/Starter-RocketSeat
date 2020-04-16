/**
 * express      -> trata de rotas
 * mongoose     -> para tratamento de banco de dados
 * require-dir  -> manipula os caminhos de inclusao de arquivos de forma otimizada
 * cors         -> permite que outras aplicacoes/software acessam o api (criado)
 * (Cross-origin resource sharing)
 *
 */
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

/**
 * Inciando o App
 */
const app = express();
app.use(express.json()); // sinaliza o envio de dados no formato json (metodo post)
app.use(cors());

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

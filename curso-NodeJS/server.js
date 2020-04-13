const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// Sinaliza a liberacao para o envio de dados no formato JSON para a aplicacao
app.use(express.json());

// Questoes de seguranca - quais dominios podem ser liberados para acessar o API
// Sem parametro o acesso fica liberado para todos os dominios
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

requireDir("./src/models");

// Rotas
// app.use -> o use indica que toda e qualquer requisicao  sera' aceita.
app.use("/api", require("./src/routes"));

app.listen(3001);

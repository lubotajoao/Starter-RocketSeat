const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Efetivando a criação do model da aplicação
requireDir("./src/models");
const Product = mongoose.model("Product");

app.get("/", (request, response) => {
  Product.create({
    title: "React Native",
    description: "Build native apps with React",
    url: "http://github.com/facebook/react-native",
  });

  return response.send("Bonjour le monde !!!");
});

app.listen(3001);

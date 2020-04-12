const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

requireDir("./src/models");

const Product = mongoose.model("Product");

// Primeira Rota
app.get("/", (request, response) => {
  Product.create({
    title: "React Native",
    description: "Build native apps with React",
    url: "https://github.com/facebook/react-native",
  });

  return response.send("Coucou!!!");
});

app.listen(3001);

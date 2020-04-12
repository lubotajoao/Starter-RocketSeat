const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);   // Rota de mostrar todos os produtos na tela.
routes.post("/products", ProductController.store);  // Rota de persistencia de dados no DB

module.exports = routes;

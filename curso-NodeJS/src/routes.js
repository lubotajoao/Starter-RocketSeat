const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index); // Rota de mostrar todos os produtos na tela.
routes.get("/products/:id", ProductController.show); // Rota que mostra um registro especifico
routes.post("/products", ProductController.store); // Rota de persistencia de dados no DB
routes.put("/products/:id", ProductController.update); // Rota de persistencia de dados no DB atualizacao
routes.delete("/products/:id", ProductController.destroy); // Rota para deletar um registro no banco

module.exports = routes;

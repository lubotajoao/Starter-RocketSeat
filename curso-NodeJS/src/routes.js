const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);

// exportando o router para que seja utilizado em outros arquivos (com import)
module.exports = routes;

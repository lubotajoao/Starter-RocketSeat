const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);

// O export do routes deve ocorrer para que a configuracao de rotas funcione em toda app
// Para a utilizacao sera' usada o metodo import para importar-la.
module.exports = routes;

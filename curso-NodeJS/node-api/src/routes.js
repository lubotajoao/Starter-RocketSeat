const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index); // lista objetos do banco
routes.get("/products/:id", ProductController.show); // lista registro de um objeto do banco
routes.post("/products", ProductController.store); // cria novo objeto no banco
routes.put("/products/:id", ProductController.update); // atualiza um registro
routes.delete("/products/:id", ProductController.destroy); // apaga um registro

// O export do routes deve ocorrer para que a configuracao de rotas funcione em toda app
// Para a utilizacao sera' usada o metodo import para importar-la.
module.exports = routes;

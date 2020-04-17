const express = require("express");

const app = express();

/**
 * Request: simboliza toda requisição feita no servidor
 * Request contém todas as informções desta requisição:
 *  - Parâmetros;
 *  - Corpo da requisição;
 *  - Cabeçalho da requisição;
 *  - Usuário que está fazendo a requisição;
 *  - Autenticação (se o usuário está autenticado ou não)
 *
 * Response: tem a ver com a resposta dada para a requisição.
 *
 * O fluxo do backend é a gente fazer uma requisição e o servidor devolver uma resposta.
 */

app.get("/", (request, response) => {
  response.send("Bonjour le monde!!!");
});

app.listen(3001);

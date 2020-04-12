const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Coucou!!!");
});

app.listen(3001);

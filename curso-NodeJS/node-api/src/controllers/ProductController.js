const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(request, response) {
    const products = await Product.find();

    return response.json(products);
  },

  async store(request, response) {
    // Criacao de um novo produto
    const product = await Product.create(request.body);

    return response.json(product);
  },
};
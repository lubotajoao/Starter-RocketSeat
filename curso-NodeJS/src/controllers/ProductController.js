/**
 * O Controller lida com as operacoes que teremos em determinados models
 */
const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  // Faz a listagem de todos os produtos que estiverem na nossa base
  async index(request, response) {
    const products = await Product.find();

    return response.json(products);
  },

  async store(request, response) {
    const product = await Product.create(request.body);

    return response.json(product);
  },
};

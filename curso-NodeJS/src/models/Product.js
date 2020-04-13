const mongoose = require("mongoose");
const mongosePaginate = require("mongoose-paginate");

// Determinando a estrutura do banco de dados
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongosePaginate);

// Criando a tabela no Product no banco
mongoose.model("Product", ProductSchema);

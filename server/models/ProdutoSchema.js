const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O campo nome é obrigatório"],
  },
  codigo: {
    type: String,
    required: [true, "O campo código é obrigatório"],
  },
  preco: {
    type: Number,
    min: [0.01, "Valor mínimo de R$ 0,01"],
    required: [true, "O campo preço é obrigatório"],
  },
  descricao: {
    type: String,
    required: [true, "O campo descrição é obrigatório"],
  },
  criadoEm: { type: Date, default: Date.now },
  quantidade: {
    type: Number,
    default: 0,
    min: [0, "Valor minimo e 0"]
  }
});

module.exports = produtoSchema;

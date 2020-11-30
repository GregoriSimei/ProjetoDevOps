const mongoose = require("mongoose");
const ProdutoSchema = require("./ProdutoSchema.js");

const farmaciaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O campo nome é obrigatório"],
  },
  cnpj: {
    type: String,
    required: [true, "O campo cnpj é obrigatório"],
  },
  criadoEm: { type: Date, default: Date.now },
  usuarioId: {
    type: String,
    required: [true]
  },
  produtos: [ProdutoSchema]
});

module.exports = mongoose.model("Farmaciass", farmaciaSchema);

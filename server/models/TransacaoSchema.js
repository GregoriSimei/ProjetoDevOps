const mongoose = require('mongoose');
const Produto = require('./ProdutoSchema.js');

const TransacaoSchema = new mongoose.Schema({
    cnpjFarmacia: {
        type: String,
        required: [true]
    },
    userId: {
        type: String,
        required: [true]
    },
    produto: Produto,
    qtd: {
        type: Number,
        required: [true],
        min: [1]
    },
    status: {
        type: String,
        enum: ['cancelado', 'aprovado', 'em andamento'],
        default: "em andamento"
    }
});

module.exports = TransacaoSchema;
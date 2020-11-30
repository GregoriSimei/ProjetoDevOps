const mongoose = require('mongoose');
const Transacao = require('./TransacaoSchema.js');

const CompraSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true]
    },
    criadoEm: {
        type: Date,
        default: Date.now
    },
    transacoes: [Transacao],
    valor: {
        type: Number
    }
});

module.exports = mongoose.model("compra", CompraSchema);
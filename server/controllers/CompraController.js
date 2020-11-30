const { raw } = require('body-parser');
const CompraSchema = require('../models/CompraSchema.js');

class CompraController {

    async store(req, res) {
        var compra = req.body;
        compra.userId = req.userId;

        var transacoes = compra.transacoes;

        var valor = 0;

        await transacoes.forEach(transacao => {
            transacao.userId = req.userId;
            var produto = transacao.produto;
            var preco = produto.preco;
            var qtd = transacao.qtd;
            valor += (preco * qtd);
        });

        compra.valor = valor;

        var resposta = await CompraSchema.create(compra);
        res.status(200).send(resposta);
    }

    async getTransacoesFarmacia(req, res) {
        var cnpjFarma = req.params.cnpjFarma;
        var compras = await CompraSchema.find({});
        var transacoesResposta = [];

        await compras.forEach(compra => {
            var transacoes = compra.transacoes;
            transacoes.forEach(transacao => {
                if (transacao.cnpjFarmacia == cnpjFarma) {
                    transacoesResposta.push(transacao);
                }
            });
        });

        res.status(200).send(transacoesResposta);
    }

    async getCompraUsario(req, res) {
        var userId = req.userId;
        var compras = await CompraSchema.find({ userId: userId });
        res.status(200).json(compras);
    }

    async updateTransacao(req, res) {
        var msgResponse = "not exists";

        var transacaoAtualizar = req.body;
        var userId = transacaoAtualizar.userId;
        var transacaoId = transacaoAtualizar.id;

        var compras = await CompraSchema.find({ userId: userId });
        var compraAtualizar = null;

        await compras.forEach(compra => {
            var transacoes = compra.transacoes;

            transacoes.forEach(transacao => {
                if (transacao.id == transacaoId) {
                    transacao.status = transacaoAtualizar.status;
                    compraAtualizar = compra;
                }
            });
        });

        if (compraAtualizar != null) {
            await CompraSchema.updateOne(compraAtualizar);
            msgResponse = "updated";
        }

        res.status(200).send({ message: msgResponse });
    }
}

module.exports = new CompraController();
const Farmacia = require("../models/FarmaciaSchema");
const Produto = require("../models/ProdutoSchema");

class FarmaciaController {
    async store(req, res) {
        var resultFind = await Farmacia.findOne({ cnpj: req.body.cnpj });
        if (resultFind === null) {
            var result = await Farmacia.create(req.body);
            res.status(201).json(result);
        } else {
            res.status(406).json("Cnpj já cadastrado");
        }
    }

    async get(req, res) {
        var result = await Farmacia.find({});
        console.log(req.userId);
        res.status(200).json(result);
    }

    async getOne(req, res) {
        var result = await Farmacia.findOne({ cnpj: req.params.cnpj });
        res.status(200).json(result);
    }

    async getByUser(req, res) {
        console.log(req.userId);
        var result = await Farmacia.findOne({ usuarioId: req.userId });
        res.status(200).json(result);
    }

    async update(req, res) {
        var result = await Farmacia.updateOne({ cnpj: req.body.cnpj }, { $set: req.body });
        res.status(200).json(result);
    }

    async delete(req, res) {
        var result = await Farmacia.deleteOne({ cnpj: req.params.cnpj });
        res.status(200).json({ message: "success" });
    }

    async storeProduto(req, res) {
        var cnpj = req.params.cnpj;
        var farmacia = await Farmacia.findOne({ cnpj: cnpj });

        var produto = req.body;
        var check = farmacia.produtos.find(prod => prod.codigo === produto.codigo);

        if (check != undefined) {
            return res.status(400).send({ message: "Codigo existente" });
        }

        farmacia.produtos.push(produto);

        var resposta = await Farmacia.updateOne({ cnpj: req.params.cnpj }, { $set: farmacia });

        res.status(200).json(resposta);
    }

    async deleteProduto(req, res) {
        var [message, statusCode] = ["Produto nao existe", 404];

        var cnpj = req.params.cnpj;
        var farmacia = await Farmacia.findOne({ cnpj: cnpj });

        var produto = req.body;
        var prodEncontrado = farmacia.produtos.find(prod => prod.codigo === produto.codigo);

        if (prodEncontrado != undefined) {
            message = "success";
            statusCode = 200;
            const index = farmacia.produtos.indexOf(prodEncontrado);
            farmacia.produtos.splice(index, 1);

            await Farmacia.updateOne({ cnpj: req.params.cnpj }, { $set: farmacia });
        }

        res.status(statusCode).send({ message: message });
    }

    async updateProduto(req, res) {
        var cnpj = req.params.cnpj;
        var farmacia = await Farmacia.findOne({ cnpj: cnpj });

        var produto = req.body;
        var prodEncontrado = farmacia.produtos.find(prod => prod.codigo === produto.codigo);

        if (prodEncontrado != undefined) {
            const index = farmacia.produtos.indexOf(prodEncontrado);
            farmacia.produtos.splice(index, 1, produto);

            await Farmacia.updateOne({ cnpj: req.params.cnpj }, { $set: farmacia });

            return res.status(200).send({ message: "sucess" });
        }

        return res.status(200).send({ message: "fail" });
    }

    async findProduto(req, res) {
        var codigo = req.params.codigo;
        var cnpj = req.params.cnpj;

        var farmacia = await Farmacia.findOne({ cnpj: cnpj });
        var prodEncontrado = farmacia.produtos.find(prod => prod.codigo === produto.codigo);

        if (prodEncontrado != undefined)
            return res.status(200).json(prodEncontrado);

        return res.status(200).send({ message: 'not found' });
    }
}

module.exports = new FarmaciaController();
const express = require("express");
const router = express.Router();
const farmaciaController = require("../controllers/FarmaciaController.js");
const FarmaciaController = require("../controllers/FarmaciaController.js");
const CompraController = require('../controllers/CompraController.js');

const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.post("/farmacia/cadastrar", farmaciaController.store);
router.get("/farmacia/buscar/", farmaciaController.getByUser);
router.get("/farmacia/listar", farmaciaController.get);
router.put("/farmacia/alterar", farmaciaController.update);
router.delete("/farmacia/remover/:cnpj", farmaciaController.delete);

router.get("/farmacia/:cnpj/produto/:codigo", FarmaciaController.findProduto);
router.post("/farmacia/:cnpj/produto", FarmaciaController.storeProduto);
router.post("/farmacia/:cnpj/produto/deletar", FarmaciaController.deleteProduto);
router.put("/farmacia/:cnpj/produto", FarmaciaController.updateProduto);

router.post("/compra", CompraController.store);
router.put("/compra/transacao", CompraController.updateTransacao);
router.get("/farmacia/compra/:cnpjFarma", CompraController.getTransacoesFarmacia);
router.get("/usuario/compra", CompraController.getCompraUsario);

module.exports = router;

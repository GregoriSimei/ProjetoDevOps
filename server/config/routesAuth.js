const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthController.js");

router.post("/registrar", authController.store);
router.post("/autenticar", authController.authenticate);

module.exports = router;
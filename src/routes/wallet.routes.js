const express = require("express");
const auth = require("../config/users.helper");
const walletCTRL = require("../controllers/wallets.controller");
const router = express.Router();
const wallets = require("../controllers/wallets.controller");

router.post("/create", auth.vToken, wallets.createWallet);
router.get("/walletslist/:id", auth.vToken, wallets.getWallet);
router.get("/transaction/:id", auth.vToken, walletCTRL.getById);

module.exports = router;
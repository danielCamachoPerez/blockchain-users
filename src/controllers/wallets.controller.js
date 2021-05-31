const walletCTRL = {};
const wallet = require("../models/wallet.model");

walletCTRL.createWallet = async(req, res) => {
    const { name, public_key, private_key, user } = req.body;
    const myWallet = new wallet({
        name,
        public_key,
        private_key,
        user,
    });
    const publickey = await wallet.findOne({ public_key: public_key });
    if (publickey) {
        return res.json({
            message: "key exist!",
        });
    }
    const response = await myWallet.save();
    res.json({
        message: "wallet created!",
        response,
    });
};

walletCTRL.getWallet = async(req, res) => {
    const id = req.params.id;
    const response = await wallet.find({ user: id });
    return res.json(response);
};

walletCTRL.getById = async(req, res) => {
    const id = req.params.id;
    const response = await wallet.findById({ _id: id });
    return res.json(response);
};

module.exports = walletCTRL;
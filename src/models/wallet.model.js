const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wallet = new Schema({
    name: String,
    public_key: String,
    private_key: String,
    user: String,
});

module.exports = mongoose.model("wallet", wallet);
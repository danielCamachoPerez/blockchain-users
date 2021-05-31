const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    name: String,
    mail: String,
    password: String,
});

module.exports = mongoose.model("user", user);
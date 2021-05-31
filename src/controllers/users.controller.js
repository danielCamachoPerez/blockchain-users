const userCTRL = {};
const user = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwbt = require("jsonwebtoken");

userCTRL.createUser = async(req, res) => {
    const { name, mail, password } = req.body;
    const newUser = new user({
        name,
        mail,
        password,
    });
    const mailUser = await user.findOne({ mail: mail });
    if (mailUser) {
        res.json({
            message: "this mail exist!",
        });
    } else {
        newUser.password = await bcrypt.hash(password, 2);
        const token = jwbt.sign({ _id: newUser._id }, "secret");
        await newUser.save();
        res.json({
            message: "welcome",
            id: newUser._id,
            name: newUser.name,
            mail: newUser.mail,
            token,
        });
    }
};

userCTRL.login = async(req, res) => {
    const { mail, password } = req.body;
    const logUser = await user.findOne({ mail: mail });
    if (!logUser) {
        return res.json({
            message: "mail no match!",
        });
    } else {
        const match = await bcrypt.compare(password, logUser.password);
        if (match) {
            const token = jwbt.sign({ _id: logUser._id }, "secret");
            res.json({
                message: "welcome!",
                id: logUser._id,
                name: logUser.name,
                token,
            });
        } else {
            res.json({
                message: "incorrect password!",
            });
        }
    }
};

module.exports = userCTRL;
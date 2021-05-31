const auth = {};

auth.vToken = (req, res, next) => {
    if (!req.headers.autorization) {
        return res.json({ message: "no auth!" });
    }
    const token = req.headers.autorization;
    if (token === "null") {
        res.json({ message: "auth!" });
    }
    next();
};

module.exports = auth;
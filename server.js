const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("./database");

const port = 4000;

const users = require("./src/routes/user.routes");
const wallets = require("./src/routes/wallet.routes");

app.use(cors({ origin: "*" }));
app.listen(port, () => console.log(`Listen on port ${port}`));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded(true));

app.use("/users", users);
app.use("/wallets", wallets);

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});
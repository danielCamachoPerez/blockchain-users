const mongoose = require("mongoose");

URI = "mongodb://localhost/test";

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })

.then(() => console.log("base de datos conectada!!"))
    .catch((error) => console.log(error));

module.exports = mongoose;
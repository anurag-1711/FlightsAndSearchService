const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig.js")

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
}

setupAndStartServer();

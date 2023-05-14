const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig.js")
const ApiRoutes = require("./routes/index.js")

const { sequelize } = require("./models/index.js");
const db = require("./models/index.js");


const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use("/api", ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`);
        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true });
        }
    });
}

setupAndStartServer();

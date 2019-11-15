import logger from "./src/logger";
import config from "config";
import express from "express";
import geolocationRouter from "./src/api/v1/routes/geolocation";
import {sequelize} from "./src/db/sequelize";


logger.info('Starting app');
sequelize.sync({force: false}).then(async () => {
    logger.info(`Database & tables synchronized!`);
});

const app = express();
app.use('/api/v1/geolocation', geolocationRouter);
app.listen(config.get("api.port"), () => console.log(`IstackAPI app listening on port ${config.get("api.port")}!`));


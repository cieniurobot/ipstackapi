import logger from "./src/logger";
import config from "config";
import express, {NextFunction, Request, Response} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {sequelize} from "./src/db/sequelize";
import geolocationRouter from "./src/api/rest/v1/routes/geolocation";
import authRouter from "./src/api/rest/v1/routes/auth";
import expressJwt from "./src/helpers/jwt";


logger.info('Starting app');
sequelize.sync({force: false}).then(async () => {
    logger.info(`Database & tables synchronized!`);
});

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(expressJwt());
app.use('/auth', authRouter);
app.use('/api/rest/v1/geolocation', geolocationRouter);

app.use(function (err:any, req: Request, res: Response, next: NextFunction) {
    if (err.name === 'UnauthorizedError') {
        res.status(err.status).send({message: err.message});
        logger.error(err);
        return;
    }
    next();
});
app.listen(config.get("api.port"), () => console.log(`IstackAPI app listening on port ${config.get("api.port")}!`));


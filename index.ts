import logger from "./src/logger";
import config from "config";
import express, {NextFunction, Request, Response} from "express";
import {sequelize} from "./src/db/sequelize";
import geolocationRouter from "./src/api/rest/v1/routes/GeolocationRouter";
import expressJwt from "./src/helpers/jwt";
import authRouter from "./src/api/rest/v1/routes/AuthRouter";


logger.info('Starting app');
sequelize.sync({force: false}).then(async () => {
    logger.info(`Database & tables synchronized!`);
});

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(expressJwt());
app.use('/api/rest/v1/geolocation', geolocationRouter);
app.use('/auth', authRouter);

app.use(function (err:any, req: Request, res: Response, next: NextFunction) {
    if (err.name === 'UnauthorizedError') {
        res.status(err.status).send({message: err.message});
        logger.error(err);
        return;
    }
    console.info(err);
    next();
});

app.listen(config.get("api.port"), () => logger.info(`IstackAPI app listening on port ${config.get("api.port")}!`));


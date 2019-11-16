import logger from "../../../../logger";
import express, {NextFunction, Request, Response} from "express";
import GeolocationResponse from "../responses/GeolocationResponse";
import GeolocationRepository from "../../../../db/repositories/GeolocationRepository";

const geolocationRouter = express.Router();
const geolocationRepository = new GeolocationRepository();

geolocationRouter.use(function timeLog(req: Request, res: Response, next: NextFunction) {
    logger.info(`geolocation router time: ${Date.now()}`);
    next();
});


geolocationRouter.get('/', (req, res) => {
    res.json({"message": "Hello World!"});
});

geolocationRouter.post('/', (req, res) => {
    res.send('Got a POST request');
});

geolocationRouter.put('/', (req, res) => {
    res.send('Got a PUT request at /user');
});

geolocationRouter.delete('/', (req, res) => {
    res.send('Got a DELETE request at /user');
});

geolocationRouter.get('/:id', async (req, res, next) => {
    logger.debug(`geolocationRouter.get by id : ${req.params.id}`);
    if (!req.params.id) {
        res.status(400).json({
            "message": "Bad request! please type Geolocation ID."
        });
    }

    const data = await geolocationRepository.getByPk(parseInt(req.params.id));
    if (data) {
        const geolocationResponse = new GeolocationResponse(data);
        res.status(200).json(geolocationResponse);
        return next();
    }
    res.status(404).json({
        message: `Geolocation not found! ID: ${req.params.id}`
    });
});

export default geolocationRouter;

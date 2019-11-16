import express from "express";
import logger from "../../../../logger";
import Geolocation from "../../../../db/models/Geolocation";
import GeolocationLocation from "../../../../db/models/GeolocationLocation";
import GeolocationResponse from "../responses/geolocation";

const geolocationRouter = express.Router();

geolocationRouter.use(function timeLog(req, res, next) {
    logger.info('geolocation router time: ', Date.now());
    next();
});

geolocationRouter.get('/:id', async (req, res) => {
    if (!req.params.id) {
        res.status(400).json({
            "message": "Bad request! please type Geolocation ID."
        });
    }

    try {
        const geolocation = await Geolocation.findByPk(req.params.id, {
            include: [
                {
                    model: GeolocationLocation,
                    as: 'location'
                }
            ]
        });
        if (geolocation) {
            res.json(new GeolocationResponse(geolocation));
        }
        res.status(404).json({
            message: `Geolocation not found! ID: ${req.params.id}`
        });
    } catch (e) {
        logger.error(e.message);
        res.status(500).json({
            message: "Something went wrong!"
        });
    }
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

export default geolocationRouter;

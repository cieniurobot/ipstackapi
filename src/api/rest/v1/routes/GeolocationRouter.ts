import logger from "../../../../logger";
import express, {NextFunction, Request, Response} from "express";
import GeolocationResponse from "../responses/GeolocationResponse";
import GeolocationRepository from "../../../../db/repositories/GeolocationRepository";
import Geolocation from "../../../../db/models/Geolocation";
import {check, validationResult} from "express-validator";
import GeolocationRequest from "../requests/GeolocationRequest";

const geolocationRouter = express.Router();
const geolocationRepository = new GeolocationRepository();

geolocationRouter.use(function timeLog(req: Request, res: Response, next: NextFunction) {
    logger.info(`geolocation router time: ${Date.now()}`);
    next();
});


geolocationRouter.get('/', (req, res) => {
    res.json({"message": "Hello World!"});
});

geolocationRouter.post('/', [
    check('ip').not().isEmpty(),
    check('type').not().isEmpty(),
    check('continent_code').not().isEmpty(),
    check('continent_name').not().isEmpty(),
    check('country_code').not().isEmpty(),
    check('country_name').not().isEmpty(),
    check('region_code').not().isEmpty(),
    check('region_name').not().isEmpty(),
    check('city').not().isEmpty(),
    check('zip').not().isEmpty(),
    check('latitude').isNumeric(),
    check('longitude').isNumeric(),
    check('location.geoname_id').not().isEmpty(),
    check('location.capital').not().isEmpty(),
    check('location.capital').not().isEmpty(),
    check('location.languages_ids').isArray(),
    check('location.country_flag').not().isEmpty(),
    check('location.country_flag_emoji').not().isEmpty(),
    check('location.country_flag_emoji_unicode').not().isEmpty(),
    check('location.calling_code').not().isEmpty(),
    check('location.is_eu').not().isEmpty(),
], async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    const geolocation = await geolocationRepository.create(new GeolocationRequest(req.body));
    res.json(new GeolocationResponse(geolocation));
    return next();
});

geolocationRouter.put('/', (req, res) => {
    res.send('Got a PUT request at /user');
});

geolocationRouter.delete('/:id', async (req, res, next) => {
    const geolocation = await Geolocation.findByPk(parseInt(req.params.id));
    if (geolocation) {
        logger.debug(`geolocation: ${JSON.stringify(geolocation.get({plain: true}))}`);
        await geolocation.destroy();
        res.json({
            message: `Geolocation deleted!`
        });
        return next();
    }
    res.status(404).json({
        message: `Geolocation not found! ID: ${req.params.id}`
    });
});

geolocationRouter.get('/:id', async (req, res, next) => {
    logger.debug(`geolocationRouter.get by id : ${req.params.id}`);
    if (!req.params.id) {
        res.status(400).json({
            "message": "Bad request! please type Geolocation ID."
        });
    }

    const data = await geolocationRepository.findFullByPk(parseInt(req.params.id));
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

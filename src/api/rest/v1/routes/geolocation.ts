import express from "express";
import logger from "../../../../logger";

const geolocationRouter = express.Router();

geolocationRouter.use(function timeLog(req, res, next) {
    logger.info('Time: ', Date.now());
    next();
});

geolocationRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json(`Hello id: ${id}`);
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

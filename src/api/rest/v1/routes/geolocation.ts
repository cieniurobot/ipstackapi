import express from "express";

const geolocationRouter = express.Router();

geolocationRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

geolocationRouter.get('/', (req, res) => {
    res.send('Hello World!')
});

geolocationRouter.post('/', (req, res) => {
    res.send('Got a POST request')
});

geolocationRouter.put('/', (req, res) => {
    res.send('Got a PUT request at /user')
});

geolocationRouter.delete('/', (req, res) => {
    res.send('Got a DELETE request at /user')
});

export default geolocationRouter;

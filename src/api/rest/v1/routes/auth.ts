import logger from "../../../../logger";
import express from 'express';
import UserService from "../../../../services/UserService";

const authRouter = express.Router();
const userService = new UserService();

authRouter.use(function timeLog(req, res, next) {
    logger.info('New Auth request time: ', Date.now());
    next();
});

authRouter.post('/login', (req, res, next) => {
    userService.authenticate(req.body.username, req.body.password)
        .then(user => user ? res.json(user) : res.status(400).json({message: 'Username or password is incorrect'}))
        .catch(err => next(err));
});

export default authRouter;

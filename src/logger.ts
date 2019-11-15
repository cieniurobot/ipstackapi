import config from "config";
import winston from 'winston';

const logger = winston.createLogger({
    level: config.get('logger.level'),
    format: winston.format.json(),
    defaultMeta: {service: 'user-service'},
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'})
    ]
});

if (process.env.NODE_ENV !== 'local') {
    logger.add(new winston.transports.File({filename: 'debug.log'}));
}
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

export default logger;

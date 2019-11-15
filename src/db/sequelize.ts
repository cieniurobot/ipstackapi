/* istanbul ignore next */
import {Sequelize} from 'sequelize-typescript';
import config from "config";

/* istanbul ignore next */
export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: config.get('db.host'),
    database: config.get('db.database'),
    username: config.get('db.username'),
    password: config.get('db.password'),
    modelPaths: [__dirname + '/models/*.ts', __dirname + '/models/*.js'],
});

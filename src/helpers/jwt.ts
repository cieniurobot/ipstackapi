import config from 'config';
import jwt from 'express-jwt';

export default function expressJwt() {
    return jwt({secret: config.get('api.secret')}).unless({
        path: [
            '/auth/login'
        ]
    });
}

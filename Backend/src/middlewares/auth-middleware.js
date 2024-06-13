import jwt from 'jsonwebtoken';
import config from '../config.js';

export function checkToken(req, res, next){
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const [_bearer, token] = authorizationHeader.split(' ');

    if (!_bearer || !token) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    try {
        const decoded = jwt.verify(token, config.secretKey);
        req.user = decoded;
        next();
    } catch (err) {
        console.error('Invalid token', err);
        return res.status(401).json({ message: 'Invalid token' });
    }
}

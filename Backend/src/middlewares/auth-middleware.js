import { HttpStatusError } from "common-errors";
import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";

import config from "../config.js";

export function checkToken(req, res, next){
    console.log(req.headers.authorization)
    const authorizationHeader = req.headers.authorization;

    if(!authorizationHeader) throw HttpStatusError(401, 'No token provided');

    const [_bearer, token] = authorizationHeader.split(' ');

    if(!_bearer || !token) throw HttpStatusError(401, 'Invalid token');

    try{
        const decoded = jwt.verify(token, config.secretKey);
        req.user = decoded;
        next();
    }catch(err){
        logger.error(err.message);
        throw HttpStatusError(401, 'Invalid token');
    }
}
import expressLoader from './express-loader.js';
import cronLoader from './cron-loader.js';
import mongoloader from './mongo-loader.js';

export function init(server, config){
    expressLoader(server);
    cronLoader();
    mongoloader();
}
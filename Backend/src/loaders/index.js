import expressLoader from './express-loader.js';
import cronLoader from './cron-loader.js';
import mongoloader from './mongo-loader.js';

export function init(server){
    expressLoader(server);
    console.log('Express Intialized');
    cronLoader();
    console.log('Cron Intialized');
    mongoloader();
    console.log('MongoDB Intialized');
}
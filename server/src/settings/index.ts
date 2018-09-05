import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

import { decimal } from '../constants';
import { User } from '../modules/users/user.entity';

const {
    PORT,
    API_PREFIX,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env;

const portNumber = parseInt(DB_PORT, decimal);
const dbSettings: MongoConnectionOptions = {
    type: 'mongodb',
    host: DB_HOST || 'localhost',
    port: Number.isInteger(portNumber) ? portNumber : 27017,
    database: DB_NAME || 'dost',
    entities: [
        User
    ]
};

export const settings = {
    port: PORT || 3000,
    apiPrefix: API_PREFIX || 'api',
    db: dbSettings
};
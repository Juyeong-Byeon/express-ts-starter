import { DBConfig } from './config';
import mysql from 'mysql';

const connection = mysql.createConnection({
	host: DBConfig.host,
	user: DBConfig.user,
	password: DBConfig.password,
});

export default connection;

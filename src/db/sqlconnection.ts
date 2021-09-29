import mysql from 'mysql';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'dbuser',
	password: 's3kreee7',
});

export default connection;

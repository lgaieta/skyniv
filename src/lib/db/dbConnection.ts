import mysql from 'mysql2/promise';
import dbConfig from './dbConfig';

let dbConnection: Promise<mysql.Connection> | null = null;

export function getDBConnection() {
	if (!dbConnection) dbConnection = mysql.createConnection(dbConfig);

	return dbConnection;
}

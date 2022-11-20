import { getDBConnection } from '$lib/db/dbConnection';
import type Post from '$lib/models/Post';
import type { FieldPacket, RowDataPacket } from 'mysql2';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const db = await getDBConnection();
	await db.connect();
	const [result] = (await db.query<RowDataPacket[]>('select * from post')) as [
		Post[],
		FieldPacket[]
	];

	return result;
};

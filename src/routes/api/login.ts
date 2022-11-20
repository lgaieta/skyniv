import { getDBConnection } from '$lib/db/dbConnection';
import { error, json } from '@sveltejs/kit';
import type { RowDataPacket } from 'mysql2';
import type { RequestHandler } from '../../../.svelte-kit/types/src/routes/api/login/$types';

export const POST: RequestHandler = async ({ request }) => {
	const { user, password } = await request.json();
	const db = await getDBConnection();

	await db.connect();

	const [result] = await db.query<RowDataPacket[]>(
		`select * from user where user = '${user}' and password = ${password}`
	);

	if (!result[0]) throw error(404);
	return json({ message: 'User exists' });
};

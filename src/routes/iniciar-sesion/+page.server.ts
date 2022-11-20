import { getDBConnection } from '$lib/db/dbConnection';
import { error, redirect } from '@sveltejs/kit';
import type { RowDataPacket } from 'mysql2';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const user = data.get('user');
		const password = data.get('password');
		const db = await getDBConnection();

		await db.connect();

		const [result] = await db.query<RowDataPacket[]>(
			`select * from user where user = '${user}' and password = '${password}'`
		);

		console.log(result);

		if (!result[0]) throw error(404);
		redirect(302, '/');
	}
};

import { getDBConnection } from '$lib/db/dbConnection';
import type Post from '$lib/models/Post';
import type PostRepository from '$lib/models/PostRepository';
import type { RowDataPacket, FieldPacket } from 'mysql2';

type IncomingPost = {
	title: string;
	image: Blob;
	location: string;
	description: string;
	user: string;
};

class MySQLPostRepository implements PostRepository {
	public async save(post: IncomingPost): Promise<void> {
		const { title, description, location, image, user } = post;
		const db = await getDBConnection();
		await db.connect();

		await db.query(
			'insert into post (title, description, location, image, user) values (?, ?, ?, ?, "lgaieta")',
			[title, description, location, image, user]
		);
		await db.commit();
	}

	public async listPosts(): Promise<Post[]> {
		const db = await getDBConnection();
		await db.connect();
		const [result] = (await db.query<RowDataPacket[]>('select * from post')) as [
			Post[],
			FieldPacket[]
		];

		return result;
	}
}

export default MySQLPostRepository;

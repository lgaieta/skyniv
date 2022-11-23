import { getDBConnection } from '$lib/db/dbConnection';
import type PostRepository from '$lib/models/PostRepository';

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
}

export default MySQLPostRepository;

import { getDBConnection } from '$lib/db/dbConnection';
import type PostRepository from '$lib/models/PostRepository';

type IncomingPost = {
	title: string;
	image: Blob;
	location: string;
	description: string;
};

class MySQLPostRepository implements PostRepository {
	async save(post: IncomingPost): Promise<void> {
		const { title, description, location } = post;
		const image = post.image;
		const db = await getDBConnection();
		await db.connect();

		await db.query(
			'insert into post (title, description, location, image, user) values (?, ?, ?, ?, "lgaieta")',
			[title, description, location, image]
		);
		await db.commit();
	}
}

export default MySQLPostRepository;

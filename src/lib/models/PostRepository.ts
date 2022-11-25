import type Post from '$lib/models/Post';

export default interface PostRepository {
	save(post: unknown): Promise<void>;
	listPosts(): Promise<Post[]>;
}

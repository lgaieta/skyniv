export default interface PostRepository {
	save(post: unknown): Promise<void>;
}

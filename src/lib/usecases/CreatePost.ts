import type ImageRepository from '$lib/models/ImageRepository';
import type Post from '$lib/models/Post';
import type PostRepository from '$lib/models/PostRepository';

class CreatePost {
	private repository: PostRepository;
	private imageRepository: ImageRepository;

	constructor(repository: PostRepository, imageRepository: ImageRepository) {
		this.repository = repository;
		this.imageRepository = imageRepository;
	}

	public async run(post: Omit<Post, 'id_post'>) {
		const imageUrl = await this.imageRepository.save(post.image as Blob, post.title);
		const postWithImage = { ...post, image: imageUrl };
		await this.repository.save(postWithImage);
	}
}

export default CreatePost;

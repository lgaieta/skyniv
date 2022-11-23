import type ImageRepository from '$lib/models/ImageRepository';
import type PostRepository from '$lib/models/PostRepository';

type CreatePostParams = {
	SaveImage: ImageRepository['saveImage'];
	GetImageLocation: ImageRepository['getImageLocation'];
	SavePost: PostRepository['save'];
};

type IncomingPost = {
	title: string;
	description: string;
	imageBinary: ArrayBuffer;
	location: string;
	user: string;
};

class CreatePost {
	private SaveImage: ImageRepository['saveImage'];
	private GetImageLocation: ImageRepository['getImageLocation'];
	private SavePost: PostRepository['save'];

	constructor({ SaveImage, GetImageLocation, SavePost }: CreatePostParams) {
		this.SaveImage = SaveImage;
		this.GetImageLocation = GetImageLocation;
		this.SavePost = SavePost;
	}

	async run(post: IncomingPost) {
		await this.SaveImage(post.imageBinary, post.title);
		const imageLocation = this.GetImageLocation(post.title);
		await this.SavePost({ ...post, image: imageLocation });
	}
}

export default CreatePost;

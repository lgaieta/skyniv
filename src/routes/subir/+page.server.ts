import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { SIRV_CLIENT_ID, SIRV_CLIENT_SECRET } from '$env/static/private';
import CreatePost from '$lib/usecases/CreatePost';
import MySQLPostRepository from '$lib/infrastructures/MySQLPostRepository';
import SirvImageRepository from '$lib/infrastructures/SirvImageRepository';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const description = data.get('description') as string;
		const location = data.get('location') as string;
		const image = data.get('image') as Blob;

		const IncomingPost = {
			title,
			description,
			location,
			imageBinary: await image.arrayBuffer(),
			user: 'lgaieta'
		};

		const postRepository = new MySQLPostRepository();
		const imageRepository = new SirvImageRepository();
		const saveImageWithSirv = async (imageBinary: ArrayBuffer, imageName: string) =>
			imageRepository.saveImage(
				imageBinary,
				imageName,
				await imageRepository.getToken(SIRV_CLIENT_ID, SIRV_CLIENT_SECRET)
			);
		const createPost = new CreatePost({
			SavePost: postRepository.save,
			SaveImage: saveImageWithSirv,
			GetImageLocation: imageRepository.getImageLocation
		});

		createPost.run(IncomingPost);

		throw redirect(308, '/galeria');
	}
};

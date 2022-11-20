import MySQLPostRepository from '$lib/infrastructures/MySQLPostRepository';
import SirvImageRepository from '$lib/infrastructures/SirvImageRepository';
import CreatePost from '$lib/usecases/CreatePost';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { SIRV_CLIENT_ID, SIRV_CLIENT_SECRET } from '$env/static/private';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const description = data.get('description') as string;
		const location = data.get('location') as string;
		const image = data.get('image') as Blob;

		const imageRepository = new SirvImageRepository();
		if (!imageRepository.token || !cookies.get('sirv-session')) {
			imageRepository.token = await imageRepository.getToken(SIRV_CLIENT_ID, SIRV_CLIENT_SECRET);
			cookies.set('sirv-session', imageRepository.token);
		}

		const createPost = new CreatePost(new MySQLPostRepository(), imageRepository);
		await createPost.run({ title, description, location, image, user: '1' });

		throw redirect(308, '/galeria');
	}
};

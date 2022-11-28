import MySQLPostRepository from '$lib/infrastructures/MySQLPostRepository';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { postId } = params;
	const postRepository = new MySQLPostRepository();
	return await postRepository.getById(postId);
};

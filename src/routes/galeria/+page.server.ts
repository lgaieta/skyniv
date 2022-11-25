import MySQLPostRepository from '$lib/infrastructures/MySQLPostRepository';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const postRepository = new MySQLPostRepository();
	return await postRepository.listPosts();
};

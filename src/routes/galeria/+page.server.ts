import type { PageServerLoad } from './$types';
import { UNSPLASH_ACCESS_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {
	console.log(process.env);
	const request = await fetch('https://api.unsplash.com/search/photos?query=sunset', {
		headers: {
			authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY
		}
	});
	const data = await request.json();
	return data;
};

export default interface Post {
	id_post: number;
	title: string;
	description: string;
	image: Buffer | string | Blob;
	location: string;
	user: string;
}

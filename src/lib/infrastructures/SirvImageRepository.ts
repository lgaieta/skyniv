import type ImageRepository from '$lib/models/ImageRepository';

class SirvImageRepository implements ImageRepository {
	token: string | null = null;

	async getToken(clientId: string, clientSecret: string): Promise<string> {
		try {
			const response = await fetch('https://api.sirv.com/v2/token', {
				method: 'POST',
				body: JSON.stringify({ clientId, clientSecret }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			return data.token;
		} catch (e) {
			console.log('Error: ', e);
			throw 'Ha ocurrido un error';
		}
	}

	async save(image: Blob, name: string): Promise<string> {
		const url = 'https://api.sirv.com/v2/files/upload?filename=/skyniv/' + name + '.jpeg';
		return fetch(url, {
			method: 'POST',
			body: await image.arrayBuffer(),
			headers: {
				'Content-Type': 'image/jpeg',
				Authorization: this.token || ''
			}
		})
			.then((response) => {
				console.log(response.status);
				return 'https://fisednar.sirv.com/skyniv/' + name + '.jpeg';
			})
			.catch((e) => {
				console.log('Error: ', e);
				throw 'Ha ocurrido un error';
			});
	}
}

export default SirvImageRepository;

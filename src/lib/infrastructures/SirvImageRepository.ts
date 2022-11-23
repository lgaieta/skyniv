import type ImageRepository from '$lib/models/ImageRepository';

class SirvImageRepository implements ImageRepository {
	public async getToken(clientId: string, clientSecret: string): Promise<string> {
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

	public async saveImage(
		imageBinary: ArrayBuffer,
		imageName: string,
		authorizationToken: string
	): Promise<void> {
		const url = 'https://api.sirv.com/v2/files/upload?filename=/skyniv/' + imageName + '.jpeg';

		await fetch(url, {
			method: 'POST',
			body: imageBinary,
			headers: {
				'Content-Type': 'image/jpeg',
				Authorization: authorizationToken
			}
		});
	}

	public getImageLocation = (name: string) => 'https://fisednar.sirv.com/skyniv/' + name + '.jpeg';
}

export default SirvImageRepository;

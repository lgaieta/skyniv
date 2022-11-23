export default interface ImageRepository {
	getImageLocation(name: string): string;
	saveImage(
		imageBinary: ArrayBuffer,
		imageName: string,
		authorizationToken?: string
	): Promise<void>;
}

export default interface ImageRepository {
	save(Image: Blob, name: string): Promise<string>;
}

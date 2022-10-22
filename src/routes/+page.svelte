<script>
	import H1 from '$lib/components/headings/H1.svelte';
</script>

<svelte:head>
	<title>Inicio - Skyniv</title>
</svelte:head>

<main>
	<section class="Main">
		<img src="moon.png" class="MainIcon" alt="Luna" />
		<H1>Un lugar para apreciar la belleza del cielo</H1>
		<a href="/galeria" class="MainCTA">Ver galería</a>
	</section>
</main>

<style>
	.Main {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--max-width);
		width: 100%;
		height: 100%;
	}

	.MainIcon {
		width: 10rem;
		border-radius: 50%;
		margin: 3.5rem 0;
	}

	.MainCTA {
		margin-top: 1.5em;
		padding: 0.75em 1.5em;
		font-weight: 600;
		font-size: 1em;
		border-radius: 8px;
		color: var(--content-secondary);
		background-color: var(--background-secondary);
		transition: filter 0.3s ease;
	}

	.MainCTA:hover {
		filter: brightness(110%);
	}

	.Recents {
		display: flex;
		flex-flow: column nowrap;
		gap: 1.25em;
		width: 100%;
		max-width: var(--max-width);
		margin-top: 6em;
	}

	.RecentsTitle {
		grid-column: 1 / 3;
		font-size: 1.2em;
		font-weight: 500;
		color: var(--content-primary);
	}

	.RecentsPostsContainer {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		grid-auto-rows: auto;
		flex-wrap: wrap;
		gap: 1.25em;
	}

	.RecentsPost {
		display: flex;
		flex-direction: column;
		gap: 1.25em;
		padding: 1.25em;
		width: 100%;
		border: 2px solid var(--background-primary-light);
		border-radius: 1em;
		box-sizing: border-box;
		transition: backdrop-filter 0.3s ease;
	}

	.RecentsPost:hover {
		backdrop-filter: brightness(115%);
	}

	.RecentsPostImage {
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 0.5em;
		background-color: var(--background-primary-light);
	}

	.RecentsPostLocation {
		font-size: 1.1em;
		font-weight: 500;
		color: var(--content-primary);
	}

	.RecentsPostAuthor {
		font-size: 0.95em;
		font-weight: 400;
		margin-top: -0.75em;
		color: var(--content-primary);
	}
</style>

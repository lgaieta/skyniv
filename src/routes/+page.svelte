<svelte:head>
	<title>Inicio - Skyniv</title>
</svelte:head>

<main>
	<section class="Main">
		<img src="moon.png" class="MainIcon" alt="Luna" />
		<h1 class="MainTitle">Un lugar para apreciar la belleza del cielo</h1>
		<a href="/galeria" class="MainCTA">Ver galería</a>
	</section>
	<section class="Recents">
		<h2 class="RecentsTitle">Recientes</h2>
		<div class="RecentsPostsContainer">
			<article class="RecentsPost">
				<img src="foto1.jpeg" alt="Foto del cielo" class="RecentsPostImage" />
				<h4 class="RecentsPostLocation">Monte Grande, Buenos Aires</h4>
				<h4 class="RecentsPostAuthor">Tomada por Anónimo</h4>
			</article>
			<article class="RecentsPost">
				<img src="foto2.jpeg" alt="Foto del cielo" class="RecentsPostImage" />
				<h4 class="RecentsPostLocation">Luis Guillón, Buenos Aires</h4>
				<h4 class="RecentsPostAuthor">Tomada por Anónimo</h4>
			</article>
		</div>
	</section>
	<footer class="Footer">
		<p class="MainAuthorLabel">
			Creado por
			<a href="https://github.com/lgaieta" target="_blank">Luciano Aieta</a>
		</p>
	</footer>
</main>

<style>
	.Main {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 615px;
		width: 100%;
		height: 100%;
	}

	.MainIcon {
		width: 10em;
		border-radius: 50%;
		margin: 3.5em 0;
	}

	.MainTitle {
		color: var(--content-primary);
		font-size: 1.75em;
		font-weight: 700;
		text-align: center;
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

	.Footer {
		display: flex;
		justify-content: center;
	}

	.MainAuthorLabel {
		margin: 5em 0;
		color: var(--content-primary);
	}

	.MainAuthorLabel a {
		display: inline;
		position: relative;
		font-weight: 600;
	}

	.MainAuthorLabel a::before {
		opacity: 0;
		position: absolute;
		bottom: -2px;
		content: '';
		width: 100%;
		height: 2px;
		background-color: var(--content-primary);
	}

	.MainAuthorLabel a:hover::before {
		opacity: 1;
	}

	.Recents {
		display: flex;
		flex-flow: column nowrap;
		gap: 1.25em;
		width: 100%;
		max-width: 615px;
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

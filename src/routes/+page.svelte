<script>
	import Button from '$lib/components/Button.svelte';
	import H1 from '$lib/components/headings/H1.svelte';
</script>

<svelte:head>
	<title>Inicio - Skyniv</title>
</svelte:head>

<main>
	<section class="Main">
		<img src="moon.png" class="MainIcon" alt="Luna" />
		<H1>Un lugar para apreciar la belleza del cielo</H1>
		<a href="/galeria" class="MainCTA"><Button variant="primary">Ver galería</Button></a>
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
		margin-top: 1.5rem;
	}
</style>

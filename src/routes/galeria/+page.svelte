<script>
	import H1 from '$lib/components/headings/H1.svelte';
</script>

<svelte:head>
	<title>Galería - Skyniv</title>
</svelte:head>

<main class="Main">
	<div class="TitleContainer"><H1>Galería</H1></div>
</main>

<style>
	.Main {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
	}

	.TitleContainer {
		margin-top: 3.5rem;
	}
</style>

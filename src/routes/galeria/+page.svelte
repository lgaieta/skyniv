<script lang="ts">
	import H1 from '$lib/components/headings/H1.svelte';
	import type Post from '$lib/models/Post';
	export let data: any;
	let postsList: Post[];
	$: {
		postsList = Object.values(data);
		console.log(postsList);
	}
</script>

<svelte:head>
	<title>Galería - Skyniv</title>
</svelte:head>

<main class="Main">
	<div class="TitleContainer"><H1>Galería</H1></div>
	<div class="PhotosList">
		{#each postsList as image}
			<div class="PhotoContainer">
				<img src={image.image} alt={image.title} />
				<div class="PhotoInfo">
					<p>{image.title}</p>
					<p class="PhotoAuthor">{image.user}</p>
				</div>
			</div>
		{/each}
	</div>
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

	.PhotosList {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		width: 100%;
		max-width: var(--max-width);
	}

	.PhotoContainer {
		display: flex;
		flex-direction: column;
		width: 90%;
		border: 1px solid var(--background-primary-light);
		border-radius: 1rem;
	}

	.PhotoContainer img {
		aspect-ratio: 16 / 9;
		border-radius: 1rem 1rem 0 0;
	}

	.PhotoInfo {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		box-sizing: border-box;
		color: var(--content-primary);
	}
</style>

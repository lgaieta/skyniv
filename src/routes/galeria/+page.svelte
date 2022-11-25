<script lang="ts">
	import H1 from '$lib/components/headings/H1.svelte';
	import type Post from '$lib/models/Post';
	export let data: any;
	let postsList: Post[];
	$: {
		postsList = Object.values(data);
	}
</script>

<svelte:head>
	<title>Galería - Skyniv</title>
</svelte:head>

<main class="Main">
	<div class="TitleContainer"><H1>Galería</H1></div>
	<div class="PostList">
		{#each postsList as post}
			<div class="PostContainer">
				<img src={post.image} alt={post.title} />
				<div class="PostInfo">
					<p class="PostTitle">{post.title}</p>
					<p class="PostAuthor">{post.user}</p>
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

	.PostList {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		width: 100%;
		max-width: var(--max-width);
	}

	.PostContainer {
		display: flex;
		flex-direction: column;
		width: 90%;
		border: 1px solid var(--background-primary-light);
		border-radius: 1rem;
	}

	.PostContainer img {
		aspect-ratio: 16 / 9;
		border-radius: 1rem 1rem 0 0;
	}

	.PostInfo {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		box-sizing: border-box;
		color: var(--content-primary);
	}

	.PostTitle {
		font-weight: 700;
	}
</style>

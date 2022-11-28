<script lang="ts">
	import H1 from '$lib/components/headings/H1.svelte';
	import type Post from '$lib/models/Post';
	export let data: Post;
	const post = data;
	// TODO: Post details UI
</script>

<svelte:head>
	<title>{post.title} - Skyniv</title>
</svelte:head>

<main>
	<img src={post.image} alt={post.title} />
	<div class="title"><H1>{post.title}</H1></div>
	<ul class="details">
		<li class="description">
			<strong>Descripción</strong>
			{post.description}
		</li>
		<li class="location">
			<strong>Tomado en</strong>
			{post.location}
		</li>
		<li class="user">
			<strong>Subido por</strong>
			{post.user}
		</li>
	</ul>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		max-width: var(--max-width);
		margin-top: 2rem;
		color: var(--content-primary);
	}

	img {
		width: 100%;
		border-radius: 1rem;
	}

	.title {
		width: 90%;
		text-align: center;
	}

	.details {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
		width: 100%;
	}

	.details li {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.details strong {
		font-weight: 600;
	}

	.description {
		justify-self: start;
	}

	.location {
		justify-self: center;
	}

	.user {
		justify-self: end;
	}
</style>

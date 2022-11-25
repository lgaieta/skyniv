<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import H1 from '$lib/components/headings/H1.svelte';
</script>

<svelte:head>
	<title>Subir imagen - Skyniv</title>
</svelte:head>

<main>
	<H1>Subir imagen</H1>
	<form method="POST" use:enhance>
		<label for="title">Título</label>
		<input name="title" type="text" />
		<label class="description" for="description">Descripción</label>
		<textarea name="description" class="description" />
		<input name="image" type="file" accept="image/jpg, image/jpeg, image/png" />
		<label for="location">Ubicación</label>
		<input name="location" type="text" placeholder="Por ejemplo: Monte Grande, Buenos Aires" />
		<label for="saveImage"><Button variant="primary" fullWidth>Subir</Button></label>
		<input type="submit" name="saveImage" />
	</form>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		margin-top: 4rem;
		color: var(--content-primary);
		width: 100%;
		max-width: var(--max-width);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 70%;
	}

	label {
		margin-top: 1rem;
		font-size: 1.2rem;
	}

	input[type='text'],
	textarea {
		color: var(--content-primary);
		font-size: 1.1rem;
		background-color: var(--background-primary-light);
		border: 2px solid transparent;
		border-radius: 1rem;
		outline: none;
		font-family: inherit;

		width: 100%;
		padding: 1rem;
		box-sizing: border-box;
	}

	input[type='file'] {
		margin-top: 1.5rem;
	}

	textarea {
		resize: vertical;
	}

	input:focus {
		border: 2px solid var(--background-secondary);
	}

	input[type='submit'] {
		display: none;
	}
</style>

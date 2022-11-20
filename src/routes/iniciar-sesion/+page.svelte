<script>
	import { enhance } from '$app/forms';
	import H1 from '$lib/components/headings/H1.svelte';
</script>

<svelte:head>
	<title>Iniciar sesión - Skyniv</title>
</svelte:head>

<main>
	<H1>Iniciar sesión</H1>
	<form method="POST" use:enhance>
		<label for="user">Usuario</label>
		<input name="user" type="text" />
		<label class="password" for="password">Contraseña</label>
		<input name="password" type="password" />
		<input type="submit" value="Iniciar sesión" />
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
		font-size: 1.2rem;
	}

	label.password {
		margin-top: 1rem;
	}

	input[type='password'],
	input[type='text'] {
		color: var(--content-primary);
		font-size: 1.1rem;
		background-color: var(--background-primary-light);
		border: 2px solid transparent;
		border-radius: 1rem;
		outline: none;

		width: 100%;
		padding: 1rem;
		box-sizing: border-box;
	}

	input:focus {
		border: 2px solid var(--background-secondary);
	}

	input[type='submit'] {
		font-size: 1.1rem;
		font-weight: 700;
		font-family: inherit;

		color: var(--content-secondary);
		background-color: var(--background-secondary);

		border: 2px solid transparent;
		border-radius: 1rem;
		outline: none;

		width: 100%;
		padding: 1rem;
		margin-top: 1.5rem;
		box-sizing: border-box;

		cursor: pointer;
	}

	input[type='submit']:focus {
		border: 2px solid #fff;
	}
</style>

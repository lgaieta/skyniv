<script>
	import '../app.css';
	import Header from '$lib/layouts/Header.svelte';
	import Footer from '$lib/layouts/Footer.svelte';
	let currentTheme = 'light';

	function toggleTheme() {
		currentTheme = currentTheme === 'light' ? 'dark' : 'light';
	}
</script>

<div class="AppContainer {currentTheme}">
	<Header {toggleTheme} />
	<slot />
	<Footer />
</div>

<style>
	.AppContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 2em;
		width: 100%;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: var(--background-primary);

		--max-width: 615px;

		/* Colors */
		/* Primitive */
		--primary: #312c51;
		--primary-light: #48426d;
		--secondary: #f0c38e;
		--secondary-light: #ffd29f;
		--secondary-brighter: #f1aa9b;
		--light: #ffffff;
		--dark: #1f1f1f;
	}

	.AppContainer.light {
		/* Content */
		--content-primary: var(--light);
		--content-secondary: var(--dark);

		/* Container */
		--background-primary: var(--primary);
		--background-primary-light: var(--primary-light);
		--background-secondary: var(--secondary);
		--background-secondary-light: var(--secondary-light);
	}

	.AppContainer.dark {
		--content-primary: var(--dark);
		--content-secondary: var(--light);
		--background-primary: var(--secondary);
		--background-primary-light: var(--secondary-light);
		--background-secondary: var(--primary);
		--background-secondary-light: var(--primary-light);
	}
</style>

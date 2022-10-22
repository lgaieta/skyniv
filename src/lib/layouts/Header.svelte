<script lang="ts">
	import { onMount } from 'svelte';

	export let toggleTheme: () => void;

	let currentWidth: number | null = null;

	onMount(() => (currentWidth = screen.availWidth));
</script>

<header class="Header">
	<a href="./" class="HeaderLogoLink"><p class="HeaderLogo">Skyniv</p> </a>
	<button on:click={toggleTheme} class="SecondaryButton">Cambiar tema</button>
</header>

<style>
	.Header {
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
		right: 0;
		left: 0;
		width: 100%;
		max-width: 615px;
		padding: 0.75em 0;
		background-color: var(--background-primary);
		box-sizing: border-box;
		z-index: 10;
	}

	.HeaderLogoLink {
		display: flex;
		align-items: center;
	}

	.HeaderLogo {
		display: inline;
		font-size: 1em;
		font-weight: 600;
		color: var(--content-primary);
	}

	.HeaderNavbar {
		display: flex;
		align-items: center;
		gap: 1em;
	}

	.HeaderLink {
		position: relative;
		font-size: 0.9em;
		color: var(--content-primary);
	}

	.HeaderLink::before {
		opacity: 0;
		position: absolute;
		bottom: -2px;
		content: '';
		width: 100%;
		height: 2px;
		background-color: var(--content-primary);
	}

	.HeaderLink:hover::before {
		opacity: 1;
	}

	.SecondaryButton {
		padding: 0 1em;
		font-weight: 500;
		font-size: 1em;
		border-radius: 8px;
		background: transparent;
		border: none;
		color: var(--background-secondary);
		transition: filter 0.3s ease;
	}

	.HeaderResponsiveNavbar {
		display: none;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 0 calc((100% - var(--max-width)) / 2);
		background-color: var(--background-primary-light);
		max-width: var(--max-width);
		width: 100%;
	}

	.HeaderResponsiveNavbarLink {
		font-size: 1.1rem;
		color: var(--content-primary);
		padding: 1rem;
		font-weight: 600;
	}

	@media (max-width: 600px) {
		.HeaderResponsiveNavbar {
			display: flex;
		}

		.HeaderNavbar {
			display: none;
		}
	}
</style>

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
		max-width: var(--max-width);
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
</style>

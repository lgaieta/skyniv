<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<header class="Header">
	<a href="./" class="HeaderLogoLink"><p class="HeaderLogo">Skyniv</p></a>
	<a href="/subir"><Button variant="secondary" compact>Subir imagen</Button></a>
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
		border-bottom: 1px solid var(--background-primary-light);
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
</style>

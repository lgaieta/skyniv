<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'tertiary';
	export let compact: boolean = false;
	export let fullWidth: boolean = false;
	const isCompact = compact ? 'compact' : '';
	const isFullWidth = fullWidth ? 'fullWidth' : '';
</script>

<button class="{variant} {isCompact} {isFullWidth}">
	<slot />
</button>

<style>
	button {
		padding: 0.75em 1.5em;
		font-weight: 600;
		font-size: 1em;
		border-radius: 0.5rem;
		outline: none;
		border: 1px solid transparent;
		transition: filter 0.3s ease;
		cursor: pointer;
	}

	button:hover {
		filter: brightness(110%);
	}

	button.primary {
		color: var(--content-secondary);
		background-color: var(--background-secondary);
	}

	button.secondary {
		color: var(--content-primary);
		background-color: var(--background-primary-light);
	}

	button.tertiary {
		color: var(--background-secondary);
		background: transparent;
	}

	button.compact {
		padding: 0.4rem 1rem;
		font-size: 0.95em;
	}

	button.fullWidth {
		width: 100%;
	}
</style>

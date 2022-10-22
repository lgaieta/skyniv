<footer class="Footer">
	<p class="MainAuthorLabel">
		Creado por
		<a href="https://github.com/lgaieta" target="_blank">Luciano Aieta</a>
	</p>
</footer>

<style>
	.Footer {
		display: flex;
		justify-content: center;
	}

	.MainAuthorLabel {
		margin: 5em 0;
		color: var(--content-primary);
	}

	.MainAuthorLabel a {
		display: inline;
		position: relative;
		font-weight: 600;
	}

	.MainAuthorLabel a::before {
		opacity: 0;
		position: absolute;
		bottom: -2px;
		content: '';
		width: 100%;
		height: 2px;
		background-color: var(--content-primary);
	}

	.MainAuthorLabel a:hover::before {
		opacity: 1;
	}
</style>

<script>
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	main {
		width: 50%;
		margin: 2rem auto;
	}
</style>

<script>
	import { onMount } from 'svelte';
	import Post from './blog.svelte';

	let blogPosts;

	onMount(async () => {
		// await fetch('https://u3syoe.deta.dev/notes')
		await fetch('http://localhost:4000')
			.then((res) => res.json())
			.then((data) => {
				console.log({ data });
				blogPosts = data.value;
				console.log({ blogPosts });
			});
	});
</script>

<!-- <script>
	export let post;
	console.log({ post });
</script> -->

<section>
	{#if blogPosts}
		{#each blogPosts as blogPost}
			<ul>
				<li>
					<h1>{blogPost.title}</h1>
					<p>{blogPost.body}</p>
				</li>
			</ul>
		{/each}
	{:else}
		<p>loading...</p>
	{/if}
</section>

<style>
	section {
		font-family: 'Courier New', Courier, monospace;
	}
</style>

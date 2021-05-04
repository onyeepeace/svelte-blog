<script context="module">
	import SvelteMarkdown from 'svelte-markdown';

	export const load = async ({ fetch }) => {
		const res = await fetch('/blog.json');
		if (res.ok) {
			const posts = await res.json();
			console.log({ posts });
			return {
				props: { posts }
			};
		}
	};
</script>

<script>
	export let posts;
	console.log({ posts });
</script>

<section>
	{#if posts}
		{#each posts as post}
			<ul>
				<li>
					<h1>{post.title}</h1>
					<SvelteMarkdown source={post.body} />
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

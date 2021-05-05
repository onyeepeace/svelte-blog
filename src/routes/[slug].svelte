<script context="module">
	import { base } from '$app/paths';
	import SvelteMarkdown from 'svelte-markdown';

	export const load = async ({ page, fetch }) => {
		const { slug } = page.params;
		const res = await fetch(`${base}/${slug}.json`);
		if (res.ok) {
			const post = await res.json();
			console.log({ post });
			return {
				props: { post }
			};
		}
	};
</script>

<script>
	export let post;
	console.log({ post });
</script>

<section>
	{#if post}
		<h1>{post.title}</h1>
		<SvelteMarkdown source={post.body} />
	{:else}
		<p>loading...</p>
	{/if}
</section>

<style>
	section {
		font-family: 'Courier New', Courier, monospace;
	}
</style>

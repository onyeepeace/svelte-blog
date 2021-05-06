<script context="module">
	import SvelteMarkdown from 'svelte-markdown';
	export const load = async ({ page, fetch }) => {
		const { slug } = page.params;
		const res = await fetch(`/blog/${slug}.json`);
		if (res.ok) {
			const post = await res.json();
			return {
				props: {
					post: post[0]
				}
			};
		}
	};
</script>

<script>
	export let post;
	let tags = post.tag;
</script>

<section>
	{#if post}
		<h1>{post.title}</h1>
		<p>{post.author}</p>
		{#each tags as postTag}
			<a href={`/tag/${postTag}`}>
				<p class="tag">{postTag}</p>
			</a>
		{/each}
		<SvelteMarkdown source={post.body} />
	{:else}
		<p>loading...</p>
	{/if}
</section>

<style>
	section {
		font-family: 'Courier New', Courier, monospace;
	}
	.tag {
		border: 1px solid red;
		border-radius: 4px;
	}
</style>

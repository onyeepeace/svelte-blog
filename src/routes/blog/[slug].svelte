<script context="module">
	import SvelteMarkdown from 'svelte-markdown';
	import snarkdown from 'snarkdown';
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
		<p class="author">{post.author}</p>
		{#each tags as postTag}
			<a href={`/tag/${postTag}`}>
				<p class="tag">{postTag}</p>
			</a>
		{/each}
		<div class="body">
			<!-- {@html snarkdown(post.body)} -->
			<SvelteMarkdown source={post.body} />
		</div>
	{:else}
		<p>loading...</p>
	{/if}
</section>

<style>
	section {
		font-family: 'Courier New', Courier, monospace;
	}
	.author {
		text-transform: capitalize;
		margin: .5rem 0;
	}
	.tag {
		display: inline-block;
		background-color: cornflowerblue;
		color: white;
		padding: 1px 5px;
		margin: 0 .2rem;
		border-radius: 4px;
	}
	.body {
		margin: 1rem 0;
	}
</style>

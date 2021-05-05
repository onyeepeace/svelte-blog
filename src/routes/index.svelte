<script context="module">
	import { base } from '$app/paths';

	export const load = async ({ fetch }) => {
		const res = await fetch(`/index.json`);
		if (res.ok) {
			const posts = await res.json();
			return {
				props: { posts }
			};
		}
	};
</script>

<script>
	export let posts;
</script>

<section>
	{#if posts}
		{#each posts as post}
			<div>
				<a href={`${base}/blog/${post.slug}`}>
					<p>{post.author}</p>
					<h1>{post.title}</h1>
					<p class="tag">{post.tag.map((tags) => tags)}</p>
				</a>
			</div>
		{/each}
	{:else}
		<p>loading...</p>
	{/if}
</section>

<style>
	div {
		margin: 2rem 0;
	}
	h1 {
		font-weight: 400;
		font-size: 22px;
	}
	p {
		color: black;
		font-size: 14px;
	}

	.tag {
		font-size: 12px;
		color: gray;
	}
</style>

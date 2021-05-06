<script context="module">
	export const load = async ({ page, fetch }) => {
		const { slug } = page.params;
		const res = await fetch(`/author/${slug}.json`);
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
</script>

<section>
	{#if post}
	<h1 class="author">{post.author}</h1>
	<a href={`/blog/${post.slug}`}>
		<p>{post.date}</p>
		<h1>{post.title}</h1>
	</a>
	{:else}
		<p>loading...</p>
	{/if}
</section>

<style>
	h1 {
		font-weight: 400;
		font-size: 20px;
	}
	p {
		color: black;
		font-size: 14px;
	}
	.author {
		margin: 1rem 0;
		font-size: 24px;
		text-transform: capitalize;
	}
</style>

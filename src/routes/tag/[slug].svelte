<script context="module">
	export const load = async ({ page, fetch }) => {
		const { slug } = page.params;
		const res = await fetch(`/tag/${slug}.json`);
		if (res.ok) {
			const posts = await res.json();
			return {
				props: {
					posts: posts
				}
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
            <a href={`/blog/${post.slug}`}>
                <p>{post.date}</p>
                <p class="author">{post.author}</p>
                <h1>{post.title}</h1>
            </a>
        {/each}
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
		font-size: 14px;
		text-transform: capitalize;
	}
</style>

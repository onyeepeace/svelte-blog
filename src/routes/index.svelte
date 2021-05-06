<script context="module">

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
				<a href={`/blog/${post.slug}`}>
					<p>{post.date}</p>
					<a href={`/author/${post.author}`}>
						<p class="author">{post.author}</p>
					</a>
					<h1>{post.title}</h1>
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
	.author {
		text-transform: capitalize;
	}
	.author:hover {
		text-decoration: underline;
	}
</style>

<!-- <script>
	import { onMount } from 'svelte';
	import Post from './blog.svelte';

	let blogPosts;

	onMount(async () => {
		await fetch('https://u3syoe.deta.dev/notes')
			.then((res) => res.json())
			.then((data) => {
				blogPosts = data;
			});
	});
	console.log({ blogPosts });
</script>

{#if blogPosts}
	{#each blogPosts as blogPost}
		<ul>
			<li>
				<Post {blogPost} />
			</li>
		</ul>
	{/each}
{:else}
	<p>loading...</p>
{/if} -->

export async function get({ params }) {
	const { slug } = params;
	let blogPosts;
	let postSlug;

	await fetch(`https://zzm4wi.deta.dev`)
		.then((res) => res.json())
		.then((data) => {
			console.log({ data });
			postSlug = data.value;
			console.log({ postSlug });
			postSlug.map((blogPost) => {
				blogPost.slug = slug;
				console.log({ slug });
			});
		});

	await fetch(`https://zzm4wi.deta.dev/blog/${slug}`)
		.then((res) => res.json())
		.then((data) => {
			console.log({ data });
			blogPosts = data.value;
			console.log({ blogPosts });
		});
	let body = JSON.stringify(blogPosts);
	return {
		body
	};
}

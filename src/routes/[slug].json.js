export async function get({ params }) {
	const { slug } = params;
	let blogPosts;
	let postSlug;

	await fetch(`http://localhost:4000`)
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

	await fetch(`http://localhost:4000/blog/${slug}`)
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

export async function get({ params }) {
	const { slug } = params;
	let blogPost;

	await fetch(`https://zzm4wi.deta.dev/blog/${slug}`)
		.then((res) => res.json())
		.then((data) => {
			blogPost = data.value;
		});
	let body = JSON.stringify(blogPost);
	return {
		body
	};
}

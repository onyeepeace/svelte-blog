export async function get({ params }) {
	const { slug } = params;
	let blogPosts;

	await fetch(`https://zzm4wi.deta.dev/blog/${slug}`)
		.then((res) => res.json())
		.then((data) => {
			blogPosts = data.value;
		});
	let body = JSON.stringify(blogPosts);
	return {
		body
	};
}

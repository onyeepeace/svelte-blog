export async function get() {
	let blogPosts;
	await fetch('http://localhost:4000')
		.then((res) => res.json())
		.then((data) => {
			blogPosts = data.value;
		});
	let body = JSON.stringify(blogPosts);
	return {
		body
	};
}

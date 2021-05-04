export async function get() {
	let blogPosts;
	await fetch('http://localhost:4000')
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

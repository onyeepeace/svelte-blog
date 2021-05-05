export async function get() {
	let blogPosts;
	await fetch('https://zzm4wi.deta.dev')
		.then((res) => res.json())
		.then((data) => {
			blogPosts = data.value;
		});
	let body = JSON.stringify(blogPosts);
	return {
		body
	};
}

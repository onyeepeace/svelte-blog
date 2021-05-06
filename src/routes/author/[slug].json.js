export async function get({ params }) {
	const { slug } = params;
	let author;
	
	await fetch(`https://zzm4wi.deta.dev/author/${slug}`)
		.then((res) => res.json())
		.then((data) => {
			author = data.value;
		});
	let body = JSON.stringify(author);
	return {
		body
	};
}

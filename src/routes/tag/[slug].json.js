export async function get({ params }) {
	const { slug } = params;
	let tag;

	await fetch(`https://zzm4wi.deta.dev/tag/${slug}`)
		.then((res) => res.json())
		.then((data) => {
			tag = data;
		});
	let body = JSON.stringify(tag);
	return {
		body
	};
}

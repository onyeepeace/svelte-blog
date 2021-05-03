require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express(); // instantiate express
const { Deta } = require('deta');
const deta = Deta(); // configure your Deta project
const blog = deta.Base('svelte_blog'); // access your DB

app.use(cors());
app.use(express.json()); // for parsing application/json bodies

app.listen(4000, (err) => {
	if (err) console.log(err);
	console.log('server listening on port 4000');
});

const allPosts = [
	{
		id: 1,
		title: 'Sample Title 1',
		src: 'images/img-9.jpg',
		slug: 'sample',
		body: 'Search for the keywords to learn more about each error.'
	},
	{
		id: 2,
		title: 'Another Title 1',
		src: 'images/img-2.jpg',
		slug: 'another',
		body: 'hahahahahaha...Search for the keywords to learn more about each error.'
	}
];
const posts = allPosts.map((post) => blog.put(post));
// blog.put(po);
// getting all notes
app.get('/', async (req, res) => {
	const post = await blog.fetch([]).next();
	res.send(post);
	// if (post) {
	// 	res.json(post);
	// } else {
	// 	res.status(404).json({ message: 'no posts found' });
	// }
});

// export 'app
module.exports = app;

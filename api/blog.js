require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { Deta } = require('deta');

const app = express();
const deta = Deta();

const blog = deta.Base('svelte_blog');

app.use(cors());
app.use(express.json());

app.listen(4000, (err) => {
	if (err) console.log(err);
	console.log('server listening on port 4000');
});

const allPosts = [
	{
		title: 'How to Code',
		author: 'Peace',
		tag: ['dev', 'design'],
		slug: '',
		body: ''
	},
	{
		title: 'How to Python',
		author: 'Mustafa',
		tag: ['dev', 'devOps'],
		slug: '',
		body: ''
	},
	{
		title: 'How to Infra',
		author: 'Aavash',
		tag: ['dev', 'infra'],
		slug: '',
		body: ''
	}
];
// allPosts.map((blogs) => {
// 	blog.put(blogs);
// });

// getting all posts
app.get('/', async (req, res) => {
	const post = await blog.fetch([]).next();
	if (post) {
		res.json(post);
	} else {
		res.status(404).json({ message: 'no posts found' });
	}
});

// getting a single post
app.get('/blog/:slug', async (req, res) => {
	const { slug } = req.params;
	const post = await blog.fetch({ slug: slug }).next();
	console.log({ post });
	if (post) {
		res.json(post);
	} else {
		res.status(404).json({ message: 'post not found' });
	}
});

// export 'app
module.exports = app;

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

// getting all posts
app.get('/', async (req, res) => {
	const posts = await blog.fetch([]).next();
	if (posts) {
		res.json(posts);
	} else {
		res.status(404).json({ message: 'no posts found' });
	}
});

// getting a single post
app.get('/blog/:slug', async (req, res) => {
	const { slug } = req.params;
	const post = await blog.fetch({ slug: slug }).next();
	if (post) {
		res.json(post);
	} else {
		res.status(404).json({ message: 'post not found' });
	}
});

// getting a tag
app.get('/tag/:tag', async (req, res) => {
	const { tag } = req.params;
	const { value: items } = await blog.fetch({ "tag?contains": tag }).next();
	if (items) {
		res.json(items);
	} else {
		res.status(404).json({ message: 'tag not found' });
	}
});

// getting an author
app.get('/author/:author', async (req, res) => {
	const { author } = req.params;
	const postAuthor = await blog.fetch({ "author": author }).next();
	if (postAuthor) {
		res.json(postAuthor);
	} else {
		res.status(404).json({ message: 'author not found' });
	}
});

// export 'app
module.exports = app;

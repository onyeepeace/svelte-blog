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

// getting all notes
app.get('/', async (req, res) => {
	const post = await blog.fetch([]).next();
	if (post) {
		res.json(post);
	} else {
		res.status(404).json({ message: 'no posts found' });
	}
});

// export 'app
module.exports = app;

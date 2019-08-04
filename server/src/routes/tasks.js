const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

//Get all tasks
router.get('/', async (req, res) => {
	try {
		const posts = await Task.find();
		res.json(posts);
	}catch(err) {
		res.json({ message: err })
	}
});

//Get one task
router.get('/:id', async(req, res) => {
	try {
		const task = await Task.findById(req.params.id);
		res.json(task);
	}catch(err) {
		res.json({ message: err })
	}
});


router.post('/', async (req, res) => {
	const post = new Task({
		title: req.body.title,
		description: req.body.description
	});
	
	try {
		const savedTask = await post.save();
		res.json(savedTask);
	}catch(err) {
		res.json({ message: err });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const removedTask = await Task.remove({ _id: req.params.id });
		res.json(removedTask);
	}catch(err) {
		res.json({ message: err });
	}
});

router.patch('/:id', async (req, res) => {
	try {
		const updatedTask = await Task.update(
			{ _id: req.params.id },
			{ $set: {
				 title: req.body.title,
				 description: req.body.description
			} }
		);
		res.json(updatedTask);
	}catch(err) {
		res.json({ message: err });
	}
});

module.exports = router;

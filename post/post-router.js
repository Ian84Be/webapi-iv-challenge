const express = require('express');
const Posts = require('./postDb.js');

const router = express.Router();



// server.use('/api/posts', postRouter);
router.post('/', async (req, res) => {
    if (!req.body['user_id'] || !req.body.text) {
        res.status(400).json({error:"Missing user id or text"});
    } else {
        try {
            const newPost = await Posts.insert(req.body);
            console.log(newPost);
            res.status(201).json(newPost);
        }
        catch(err) {
            res.status(500).json({error:"Failed to add post."});
        }
    }
});

router.get('/', async (req,res) => {
    try {
        const posts = await Posts.get();
        res.status(200).json(posts);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error:'Error Retrieving the posts.'});
    }
});

router.get('/:id', async (req,res) => {
    try {
        const posts = await Posts.getById(req.params.id);
        res.status(200).json(posts);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error:'Error Retrieving the posts.'});
    }
});

router.put('/:id', async (req, res) => {
    if (!req.body['user_id'] || !req.body.text) {
        res.status(400).json({error:"Missing user id or text"});
    } else {
        try {
            const newPost = await Posts.update(req.params.id, req.body);
            console.log(newPost);
            res.status(201).json(newPost);
        }
        catch(err) {
            res.status(500).json({error:"Failed to update post."});
        }
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const count = await Posts.remove(req.params.id);
        console.log(count);
        if (count) {
            res.status(200).json({message:'The post has been removed.'});
        } else {
            res.status(404).json({error:'The post with the specified ID does not exist.'});
        }
    }
    catch (err) {
        res.status(500).json({error:'Failed to remove post.'});
    }
});

module.exports = router;
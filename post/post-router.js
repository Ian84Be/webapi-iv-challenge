const express = require('express');
const Posts = require('./postDb.js');

const router = express.Router();



// server.use('/api/posts', postRouter);
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

router.post('/', async (req, res) => {
    try {
        const newPost = await Posts.insert(req.body);
        console.log(newPost);
        res.status(201).json(newPost);
    }
    catch(err) {
        res.status(500).json({error:"Failed to add post."})
    }
});

module.exports = router;
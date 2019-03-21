const express = require('express');
const Users = require('./userDb.js');

const router = express.Router();

function upperCase(req,res,next) {
    if (req.body.name) {
        const name = req.body.name.toUpperCase();
        req.body.name = name;
    }
    next();
}

router.use(upperCase);

// server.use('/api/users', userRouter);
router.get('/', async (req,res) => {
    try {
        const users = await Users.get();
        res.status(200).json(users);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error:'Error Retrieving the posts.'});
    }
});

router.get('/:id', async (req,res) => {
    try {
        const posts = await Users.getUserPosts(req.params.id);
        if (posts) {
            res.status(200).json(posts);
        }
        else {
            res.status(404).json({error:'User ID not found.'});
        }
    }
    catch(err) {
        res.status(500).json({error:'Error Retrieving the posts.'});
    }
});

router.post('/', async (req,res) => {
    try {
        const user = await Users.insert(req.body);
        console.log(user);
        res.status(201).json(user);
    }
    catch {
        res.status(500).json({error:'Failed to add user.'})
    }
});

router.put('/:id', async (req,res) => {
    if (!req.body.name) {
        res.status(400).json({error:"Please provide a name for the user."});
    }
    try {
        let count = await Users.update(req.params.id, req.body);
        console.log(count);

        if (count) {
            const post = await Users.getById(req.params.id);
            res.status(200).json(post);
        }
        else {
            res.status(404).json({error:'The user with the specified ID does not exist.'});
        }
    } catch(err) {
        res.status(500).json({error:'The user information could not be modified.'});
    }
});

module.exports = router;
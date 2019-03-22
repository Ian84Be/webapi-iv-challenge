require('dotenv').config();

const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');

const postRouter = require('./post/post-router.js');
const userRouter = require('./user/user-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

// routing
server.use('/api/posts', postRouter);
server.use('/api/users', userRouter);

server.get('/', (req,res) => {
    res.send(` <h1>${process.env.GREETING}</h1> `)
});

module.exports = server;
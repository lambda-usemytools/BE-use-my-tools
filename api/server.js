const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-routers');
const toolsRouter = require('../tools/tools-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors( {
    origin: true,
    credentials: true
}) );

server.use('/auth', authRouter)
server.use('/users', usersRouter)
server.use('/tools', toolsRouter)

server.get('/', (req, res) => {
    res.json({ message: "Hello mate!" })
})

module.exports = server;
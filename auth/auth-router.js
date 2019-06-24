const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
const secrets = require('../config/secrets');

router.post('/register', (req ,res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 10);

    user.password = hash;

    Users.add(user)
    .then(saved => {
        const token = generateToken(user);

        res.status(201).json({ token });
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
})
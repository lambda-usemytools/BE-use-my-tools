const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
const secrets = require('../config/secrets');

router.post('/register', (req, res) => {
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

router.post('/login', (req, res) => {
    let { email, password } = req.body;

    Users.findBy({ email })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({ message: `Welcome ${user.first_name}!`, token })
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error);
        })
})

function generateToken(user) {
    const payload = {
        id: user.id,
        first_name: user.first_name,
    }

    const options = {
        expiresIn: '8h',
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;
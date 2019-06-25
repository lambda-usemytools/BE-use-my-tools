const router = require('express').Router();

const Tools = require('./tools-model');
// const restricted = require('../auth/restricted');

router.get('/', (req, res) => {
    Tools.find()
    .then(tools => {
        res.status(200).json(tools)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}) 

module.exports = router;
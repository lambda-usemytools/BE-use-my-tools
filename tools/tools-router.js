const router = require('express').Router();

const Tools = require('./tools-model');
// const restricted = require('../auth/restricted');

router.get('/', (req, res) => {
    Tools.find()
    .then(tools => {
        res.status(200).json(tools)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error)
    })
}) 

router.post('/', (req, res) => {
    Tools.add(req.body, 'id')
    .then(tool => {
        if (tool) {
            res.status(201).json(tool)
        }
        else {
            res.status(422).json({ message: 'Incomplete entry' })
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.put('/:id', async (req ,res) => {
    try {
        const tool = await debug.update(req.params.id, req.body);
        if (tool) {
            res.status(200).json(tool)
        }
        else {
            res.status(404).json({ message: 'Tool could not be found!' })
        }
    }
    catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
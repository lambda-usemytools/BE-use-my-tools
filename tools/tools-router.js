const router = require('express').Router();

const Tools = require('./tools-model');
const restricted = require('../auth/restricted');

router.get('/', restricted, (req, res) => {
    Tools.find()
    .then(tools => {
        res.status(200).json(tools)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error)
    })
}) 

router.get('/:id', restricted, (req, res) => {
    Tools.findById(req.params.id)
    .then(tool => {
        if (tool) {
            res.status(200).json(tool)
        } 
        else {
            res.status(404).json({ message: 'Tool cannot be found' })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error)
    })
}) 

router.post('/', restricted, (req, res) => {
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
        console.log(error)
        res.status(500).json(error)
    })
})

router.put('/:id', restricted, async (req ,res) => {
    try {
        const tool = await Tools.update(req.params.id, req.body);
        if (tool) {
            res.status(200).json({ message: 'Info updated!' })
        }
        else {
            res.status(404).json({ message: 'Tool could not be found!' })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.delete('/:id', restricted, async (req, res) => {
    try {
        const count = await Tools.remove(req.params.id);
        if ( count > 0 ) {
            res.status(200).json({ message: 'Deleted!' })
        } else {
            res.status(404).json({ message: 'Tool unable to be deleted!' })
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error while deleting tool!' })
    }
})

module.exports = router;
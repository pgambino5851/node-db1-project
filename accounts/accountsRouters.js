const express = require('express');


const db = require('../data/dbConfig')

const router = express.Router();

router.get('/', (req, res) => {
    db('accounts')
    .then(accounts => {
        res.status(200).json(accounts);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    db('accounts')
    .where('id', id)
    .first()
    .then(account => {
        res.status(200).json(account);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    let body = req.body;
    db('accounts').insert(body, 'id')
    .then(ids => {
        db('accounts')
        .where('id', ids[0])
        .first()
        .then(account => {
            res.status(200).json(account);
        })   
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    db('accounts')
    .where('id', id)
    .del()
    .then(count => {
        res.status(200).json(count);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    db('accounts')
    .where('id', id)
    .update(changes)
    .then(count => {
        res.status(200).json(count);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


module.exports = router;
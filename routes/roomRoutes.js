const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'get /'})
})

router.post('/', (req, res) => {
    res.status(201).json({message: 'POST created'})
})

router.put('/', (req, res) => {
    res.status(200).json({message: 'PUT updated'})
})

router.delete('/', (req, res) => {
    res.status(200).json({message: 'DELETE deleted'})
})

module.exports = router;
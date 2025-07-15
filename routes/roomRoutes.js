const express = require('express')
const router = express.Router()
const {getRooms, createRoom,updateRoom,deleteRoom} = require('../controllers/roomController')

router.get('/', getRooms)

router.post('/', createRoom)

router.put('/', updateRoom)

router.delete('/', deleteRoom)

module.exports = router;
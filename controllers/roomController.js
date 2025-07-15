const getRooms = (req, res) => {
    res.status(200).json({message: 'get /'})
}

const createRoom = (req, res) => {
    res.status(201).json({message: 'POST created'})
}

const updateRoom = (req, res) => {
    res.status(200).json({message: 'PUT updated'})
}

const deleteRoom = (req, res) => {
    res.status(200).json({message: 'DELETE deleted'})
}

module.exports = {getRooms,createRoom,updateRoom,deleteRoom}


const Room = require("../models/roomModel");
const asyncHandler = require("express-async-handler");


//GET
//get all rooms
const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json(rooms);
});

//POST
//create new room
const createRoom = asyncHandler(async (req, res) => {
  if (
    !req.body.roomNo ||
    !req.body.roomType ||
    !req.body.maxOccupancy ||
    !req.body.pricePerNight ||
    !req.body.status ||
    !req.body.amenities ||
    !req.body.description
  ) {
    res.status(400);
    throw new Error("Please add Required fields!..");
  } else {
    const room = await Room.create({
      roomNo: req.body.roomNo,
      roomType: req.body.roomType,
      maxOccupancy: req.body.maxOccupancy,
      pricePerNight: req.body.pricePerNight,
      status: req.body.status,
      amenities: req.body.amenities,
      description: req.body.description,
    });
    res.status(201).json({success: true, data: room});
  }
});

//PUT
//update existing room
const updateRoom = asyncHandler(async (req, res) => {
    const room = await Room.findById(req.params.id)

    if(!room){
        res.status(404)
        throw new Error('Room Not Found!..')
    }

    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json({success: true, data: updatedRoom})
})

//DELETE
//delete existing room
const deleteRoom = async (req, res) => {
    const room = await Room.findById(req.params.id)
    
    if(!room){
        res.status(404)
        throw new Error('Room Not Found!..')
    }

    const deletedRoom = await room.deleteOne()
    res.status(200).json({success:true, data: deletedRoom, id: req.params.id})
}


module.exports = { getRooms, createRoom, updateRoom, deleteRoom };

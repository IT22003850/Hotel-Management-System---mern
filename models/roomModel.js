const mongoose = require('mongoose')

const roomSchema = mongoose.Schema(
    {
        roomNo: {
            type: Number,
            required: true,
            unique: true,
        },
        roomType: {
            type: String,
            enum: ['Single','Double','Triple'],
            required: true,
        },
        maxOccupancy: {
            type: Number,
            required: true,
            min: [1, 'Maximum Occupancy must be atleast one!..']
        },
        pricePerNight: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ['Available','Booked','Maintenance'],
            required: true,
            default: 'Available',
        },
        amenities: {
            type: [String], 
            required: true,
            validate: {
                validator: (arr) => arr.length > 0,
                message: 'At least 1 aminity is required!..'
            },  //Ensure the amenities array isn’t empty
        },
        description: {
            type: String,
            trim: true,  //remove leading/trailing whitespace
            required: true,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('Room', roomSchema)
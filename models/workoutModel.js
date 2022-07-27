const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    imgURL: {
        type: String,
        default: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    type: {
        type: String
    },
    time: {
        type: Number
    },
    steps: {
        type: String,
        required: true
    }, 
}, { timestamps: true })



module.exports = mongoose.model('Workout', workoutSchema,)
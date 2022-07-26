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
        type: String
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
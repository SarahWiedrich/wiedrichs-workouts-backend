const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imgURL: {
        type: String
    },
    desc: {
        type: String,
    },
    steps: {
        type: String,
        required: true
    }, 
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
}, { timestamps: true })



module.exports = mongoose.model('Workout', workoutSchema,)


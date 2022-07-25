const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
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
    }
}, { timestamps: true })



module.exports = mongoose.model('Recipe', recipeSchema,)
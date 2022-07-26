const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    imgURL: {
        type: String,
    },
    serving: {
        type: Number,
        required: true,
    },
    prepTime: {
        type: Number,
        required: true,
    },
    cookTime: {
        type: Number,
        required: true,
    },
    glutenFree: {
        type: Boolean,
        required: false,
    },
    vegan: {
        type: Boolean,
        required: false,
    },
    steps: {
        type: String,
        required: true
    }
}, { timestamps: true })



module.exports = mongoose.model('Recipe', recipeSchema,)
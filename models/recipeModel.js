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
        default: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
    steps: {
        type: String,
        required: true
    }
}, { timestamps: true })



module.exports = mongoose.model('Recipe', recipeSchema,)
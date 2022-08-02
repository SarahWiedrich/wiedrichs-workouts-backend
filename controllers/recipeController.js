const Recipe = require('../models/recipeModel')
const mongoose = require('mongoose')

// get all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).sort({ createAt: -1 })

    res.status(200).json(recipes)
}

// get a single recipe
const getRecipe = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This is not the recipe your looking for' })
    }

    const recipe = await Recipe.findById(id)

    if (!recipe) {
        return res.status(404).json({ error: 'This is not the recipe your looking for' })
    }

    res.status(200).json(recipe)
}

// create new recipe
const createRecipe = async (req, res) => {
    const { title, desc, imgURL, serving, prepTime, cookTime, ingredients, steps } = req.body
    // add doc to DB
    try {
        const recipe = await Recipe.create({ title, desc, imgURL, serving, prepTime, cookTime, ingredients, steps })
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a recipe
const deleteRecipe = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This is not the recipe your looking for' })
    }

    const recipe = await Recipe.findOneAndDelete({ _id: id })

    if (!recipe) {
        return res.status(404).json({ error: 'This is not the recipe your looking for' })
    }

    res.status(200).json(recipe)
}

// update a recipe
const updateRecipe = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This is not the recipe your looking for' })
    }

    const recipe = await Recipe.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!recipe) {
        return res.status(404).json({ error: 'This is not the recipe your looking for' })
    }

    res.status(200).json(recipe)
}

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
}
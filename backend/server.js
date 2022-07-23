require('dotenv').config()

const { response } = require('express')
const express = require('express')

// express app
const app = express()

// routes
app.get('/', (req, res) => {
    res.send('Welcome to the app!')
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
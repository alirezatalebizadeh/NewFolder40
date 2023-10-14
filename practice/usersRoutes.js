const express = require('express')
//create a route for users data to create and update and delete and get
const userRoutes = express.Router()


userRoutes.get('/', (req, res) => {
    res.send('send All Users')
})
userRoutes.get('/home', (req, res) => {
    res.send('well come to home')
})

userRoutes.post('/new-user', (req, res) => {
    res.send('new User Created')
})

userRoutes.delete('/remove/:id', (req, res) => {
    res.send('user removed')
})

userRoutes.put('/edit/:id', (req, res) => {
    res.send('user updated')
})

module.exports = userRoutes



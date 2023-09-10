const Guests = require('express').Router()
const db = require('../models')
const { Guest } = db

// GET ALL BOOKS
Guests.get('/', async (req, res) => {
    try {
        const foundGuests = await Guest.findAll()
        res.status(200).json(foundGuests)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

module.exports = Guests
const Guests = require('express').Router()
const db = require('../models')
const { Guest } = db

// GET ALL GUESTS
Guests.get('/', async (req, res) => {
    try {
        const foundGuests = await Guest.findAll()
        res.status(200).json(foundGuests)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// DELETE GUEST
Guests.delete('/:guest_id', async (req, res) => {
    try {
      const deletedGuest = await Guest.destroy({
        where: {
          guest_id: req.params.guest_id
        }
      });
      if (deletedGuest === 1) {
        res.status(200).send("Guest deleted successfully");
      } else {
        res.status(404).send("Guest not found");
      }
    } catch (err) {
      res.status(500).send("Server error");
      console.log(err);
    }
  });

module.exports = Guests
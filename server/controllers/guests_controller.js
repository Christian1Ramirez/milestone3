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

// CREATE NEW GUEST
Guests.post('/', async (req, res) => {
    try {
      const newGuest = await Guest.create(req.body);
      res.status(201).json(newGuest);
    } catch (err) {
      res.status(500).send("Server error");
      console.log(err);
    }
  });

// UPDATE GUEST
Guests.put('/:guest_id', async (req, res) => {
    try {
      const updatedGuest = await Guest.update(req.body, {
        where: {
            guest_id: req.params.guest_id
        }
      });
      if (updatedGuest[0] === 1) {
        res.status(200).send("Guest updated successfully");
      } else {
        res.status(404).send("Guest not found");
      }
    } catch (err) {
      res.status(500).send("Server error");
      console.log(err);
    }
  });

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
const Gifts = require('express').Router()
const db = require('../models')
const { Gift } = db

// GET ALL GIFTS
Gifts.get('/', async (req, res) => {
    try {
        const foundGifts = await Gift.findAll()
        res.status(200).json(foundGifts)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// GET SINGLE GIFT
Gifts.get('/:gift_id', async (req, res) => {
    try {
        const gift = await Gift.findByPk(req.params.gift_id)
        if (gift) {
            res.status(200).json(gift)
        } else {
            res.status(404).send("Gift not found")
        }
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// CREATE NEW GIFT
// Gifts.post('/', async (req, res) => {
//     try {
//         const newGift = await Gift.create(req.body)
//         res.status(201).json(newGift)
//     } catch (err) {
//         res.status(500).send("Server error")
//         console.log(err)
//     }
// })

// UPDATE GIFT
Gifts.put('/:gift_id', async (req, res) => {
    try {
        const updatedGift = await Gift.update(req.body, {
            where: {
                gift_id: req.params.gift_id
            }
        })
        if (updatedGift[0] === 1) {
            res.status(200).send("Gift updated successfully")
        } else {
            res.status(404).send("Gift not found")
        }
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// DELETE GIFT
Gifts.delete('/:gift_id', async (req, res) => {
    try {
        const deletedGift = await Gift.destroy({
            where: {
                gift_id: req.params.gift_id
            }
        })
        if (deletedGift === 1) {
            res.status(200).send("Gift deleted successfully")
        } else {
            res.status(404).send("Gift not found")
        }
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

module.exports = Gifts

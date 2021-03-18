const express = require('express')
const router = express.Router()

const Phone = require("../models/phone.model")

router.get('/telefonos', (req, res) => {

    Phone.find()
        .then(phones => res.json({ message: phones }))
        .catch((error) =>
            res.status(500).json({
                code: 500,
                message: "Error buscando los teléfonos",
                error: error.message,
            })
        )
})

module.exports = router
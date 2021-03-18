const express = require('express')
const router = express.Router()

// Endpoints
router.get('/teléfonos', (req, res) => res.render('pages/index'))


module.exports = router

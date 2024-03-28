const express = require('express')
const router = express.Router()
const pageControls = require('../controller/pageController')

router.get('/', pageControls.test)

module.exports = router
const express = require('express')
const router = express.Router()
const { timer } = require('../controllers/blog')
router.get('/', timer);

module.exports = router
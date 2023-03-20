const express = require('express');
const users = require('../controllers/user.js');
const { encode } = require('../middlewares/jwt.js');

const router = express.Router();

router.post('/login/:userId', encode, (req, res, next) => { });

module.exports = router;
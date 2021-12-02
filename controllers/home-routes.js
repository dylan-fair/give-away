const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Item, Review} = require('../models')

router.get('/', (req, res) => {
    res.render('homepage');
})

module.exports = router;
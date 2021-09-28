const express = require('express');
const { validateHospital, Hospital } = require('../models/hospital');
const { validateUser, User, validateLogin } = require('../models/user');
const router = express.Router();
const keyHasher = require('../helpers/key-hasher');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    const isExist = await Hospital.find();
    if(!isExist) return res.status(400).send({error: "No hospital"})

    res.send(isExist);
});    

module.exports = router;
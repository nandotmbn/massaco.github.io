const express = require('express');
const { validateHospital, Hospital } = require('../models/hospital');
const { validateUser, User, validateLogin } = require('../models/user');
const router = express.Router();
const keyHasher = require('../helpers/key-hasher');
const bcrypt = require('bcrypt');

router.post('/hospital/register', async (req, res) => {
    const { error } = validateHospital(req.body);
    if ( error ) return res.status(400).send({error: error.message});

    const isExist = await Hospital.findOne({id : req.body.id });
    if(isExist) return res.status(400).send({error: "Hospital is registered before"})

    const newHospital = new Hospital({
        nama: req.body.nama,
        keramaian: req.body.keramaian,
        pcr: req.body.pcr,
        antigen: req.body.antigen,
        lokasi: req.body.lokasi,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        telp: req.body.telp,
        id: req.body.id,
        picture: req.body.picture,
        website: req.body.website
    });

    const result = await newHospital.save()

    res.send(result);
});

router.post('/user/register', async (req, res) => {
    const { error } = validateUser(req.body);
    if ( error ) return res.status(400).send({error: error.message});

    const isExist = await User.findOne({email : req.body.email});
    if (isExist) return res.status(400).send({error: "User is registered earlier"});

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        api_key: keyHasher()
    });

    const result = await newUser.save()

    res.send(result);
});

router.post('/user/login', async (req, res) => {
    const { error } = validateLogin(req.body);
    if ( error ) return res.status(400).send(false);

    let user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send(false);

    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) return res.status(400).send(false);

    res.send(user);
});
    

module.exports = router;
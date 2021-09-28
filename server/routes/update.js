const express = require('express');
const { validateUpdateHospital, Hospital } = require('../models/hospital');
const router = express.Router();
const keyHasher = require('../helpers/key-hasher')

router.put('/hospital/:id', async (req, res) => {
    const { error } = validateUpdateHospital(req.body);
    if ( error ) return res.status(400).send({error: error.message});

    const hospital = await Hospital.findOne({id : req.params.id});
    if (!hospital) return res.status(400).send({error: "hospital is not found"});

    const persentase = (req.body.keramaian / req.body.kapasitas) * 100;

    hospital.keramaian = req.body.keramaian;
    hospital.pcr = req.body.pcr;
    hospital.antigen = req.body.antigen;
    hospital.kapasitas = req.body.kapasitas;
    hospital.waktu = req.body.waktu;
    hospital.tanggal = req.body.tanggal;
    hospital.persentase = persentase;

    const result = await hospital.save();

    const ioEmitter = req.app.get("socketIo");
    ioEmitter.emit(result.api_key, result.keramaian);

    res.send(result);
});    

module.exports = router;
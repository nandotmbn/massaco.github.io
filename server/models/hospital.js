const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require("mongoose");
const keyHasher = require("../helpers/key-hasher");

const hospitalSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    keramaian: {
        type: Number,
        default: 0,
        minlength: 0
    },
    antigen: {
        type: Number,
        default: 0,
        minlength: 0
    },
    pcr: {
        type: Number,
        default: 0,
        minlength: 0
    },
    kapasitas: {
        type: Number,
        default: 0,
        minlength: 0
    },
    persentase: {
        type: Number,
        default: 0,
        minlength: 0
    },
    lokasi: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    latitude: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    longitude: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    website: {
        type: String,
        default: 'http://dinkes.surabaya.go.id/portalv2/upt-dinas/puskesmas/',
        minlength: 3,
        maxlength: 255
    },
    telp: {
        type: String,
        required: true,
        minlength: 0,
        maxlength: 20
    },
    id: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    tanggal: {
        type: String,
        default: "",
        minlength: 0,
        maxlength: 255
    },
    waktu: {
        type: String,
        default: "",
        minlength: 0,
        maxlength: 255
    },
    picture: {
        type: String,
        default: "",
        minlength: 3,
        maxlength: 1024
    },
});

function validateHospital(user) {
    const schema = Joi.object({
        nama: Joi.string().min(3).max(255).required(),
        lokasi: Joi.string().min(3).max(255).required(),
        latitude: Joi.string().min(3).max(255),
        longitude: Joi.string().min(3).max(255),
        telp: Joi.string().min(0).max(20).required(),
        id: Joi.string().min(0).max(20).required(),
        picture: Joi.string().min(0).max(1024).required(),
        website: Joi.string().min(0).max(1024)
    })
    return schema.validate(user);
}

function validateUpdateHospital(user) {
    const schema = Joi.object({
        keramaian: Joi.number().required(),
        pcr: Joi.number().min(0).required(),
        antigen: Joi.number().min(0).required(),
        kapasitas: Joi.number().required(),
        tanggal: Joi.string().min(0).max(255).required(),
        waktu: Joi.string().min(0).max(255).required()
    })
    return schema.validate(user);
}

const Hospital = mongoose.model('Hospital', hospitalSchema);

exports.hospitalSchema = hospitalSchema;
exports.Hospital = Hospital;
exports.validateHospital = validateHospital;
exports.validateUpdateHospital = validateUpdateHospital;
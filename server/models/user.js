const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require("mongoose");
const keyHasher = require("../helpers/key-hasher");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    apiKey: {
        type: String,
        default: keyHasher()
    }
});

function validateUser(user) {
    const schema = Joi.object({
        username: Joi.string().min(3).max(255).required(),
        email: Joi.string().email().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required()
    })
    return schema.validate(user);
}

function validateLogin(user) {
    const schema = Joi.object({
        email: Joi.string().email().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required()
    })
    return schema.validate(user);
}

const User = mongoose.model('User', userSchema);

exports.userSchema = userSchema;
exports.User = User;
exports.validateUser = validateUser;
exports.validateLogin = validateLogin;
const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

function validateObjectID_id(params) {
    const schema = Joi.object({
        _id: Joi.objectId()
    })
    return schema.validate(params);
}

function validateObjectID_channel_id(params) {
    const schema = Joi.object({
        channel_id: Joi.objectId()
    })
    return schema.validate(params);
}

exports.validateObjectID_id = validateObjectID_id;
exports.validateObjectID_channel_id = validateObjectID_channel_id;
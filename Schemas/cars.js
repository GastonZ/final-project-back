const joi = require('joi')

const schema = joi.object({
            title: joi
            .string()
            .required()
            .min(2)
            .max(30)
            .messages({
                "any.required": "This field is required.",
                "string.empty": "This field is empty, please, introduce a name.",
                "string.min": "This field is required, please, introduce a name with a minimum of 2 letters.",
                "string.max": "This field is required, please, introduce a name with less than 30 letters."
            })
            ,

            price: joi
            .number()
            .required()
            .messages({
                "any.required": "This field is required.",
                "string.empty": "This field is empty, please, introduce a number.",
            }),
            image: joi
            .string()
            .required()
            .uri()
            .messages({
                "any.required": "This field is required.",
                "string.uri": "This field is required, please, introduce a photo."
            }),
            color: joi
            .string()
            .required()
            .messages({
                "any.required": "This field is required.",

            }),
            imageDetails: joi
            .string()
            .required()
            .uri()
            .messages({
                "any.required": "This field is required.",
                "string.uri": "This field is required, please, introduce a photo."
            }),
            peakPower: joi
            .string()
            .required()
            .messages({
                "any.required": "This field is required."
            }),
            milesPerSec: joi
            .string()
            .required()
            .messages({
                "any.required": "This field is required."
            }),
            acceleration: joi
            .string()
            .required()
            .messages({
                "any.required": "This field is required."
            }),
            userId: joi
            .string()
            .required()
})

module.exports = schema
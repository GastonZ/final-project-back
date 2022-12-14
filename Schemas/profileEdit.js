const joi = require('joi')

const schema = joi.object({
            name: joi
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

            lastName: joi
            .string()
            .required()
            .min(2)
            .max(30)
            .messages({
                "any.required": "This field is required.",
                "string.empty": "This field is empty, please, introduce a name.",
                "string.min": "This field is required, please, introduce a name with a minimum of 2 letters.",
                "string.max": "This field is required, please, introduce a name with less than 30 letters."
            }),
            photo: joi
            .string()
            .required()
            .uri()
            .messages({
                "any.required": "This field is required.",
                "string.uri": "This field is required, please, introduce a photo."
            }),
            age: joi
            .number()
            .required()
            .min(1)
            .messages({
                "any.required": "This field is required.",
                "number.empty": "This field is empty, please, introduce a number."

            }),
            email: joi
            .string()
            .email()
            .required()
            .messages({
                "any.required": "This field is required.",
                "string.empty": "This field is empty, please, introduce an email."
            }),
})

module.exports = schema
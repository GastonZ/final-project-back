const joi = require('joi')

const schema = joi.object({
            email: joi
            .string()
            .required()
            .min(2)
            .messages({
                "any.required": "This field is required.",
                "string.empty": "This field is empty, please, introduce a email.",
                "string.min": "This field is required, please, introduce a email with a minimum of 2 letters.",
            }),
            password: joi
            .string()
            .required()
            .min(3)
            .messages({
                "any.required": "This field is required.",
                "string.empty": "This field is empty, please, introduce a password.",
                "string.min": "This field is required, please, introduce a password with a minimum of 4 letters.",
            })
})

module.exports = schema
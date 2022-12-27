const joi = require('joi')

const schema = joi.object({
            name: joi
            .string()
            .min(2)
            .max(30)
            .messages({
                "string.min": "This field is required, please, introduce a name with a minimum of 2 letters.",
                "string.max": "This field is required, please, introduce a name with less than 30 letters."
            })
            ,

            lastName: joi
            .string()
            .min(2)
            .max(30)
            .messages({
                "string.min": "This field is required, please, introduce a name with a minimum of 2 letters.",
                "string.max": "This field is required, please, introduce a name with less than 30 letters."
            }),
            photo: joi
            .string()
            .uri(),
            banner: joi
            .string()
            .uri(),
            age: joi
            .number()
            .min(1),
            email: joi
            .string()
            .email()
})

module.exports = schema
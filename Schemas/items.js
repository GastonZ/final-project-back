const joi = require('joi')

const schema = joi.object({
            name: joi
            .string()
            .required()
            .min(2)
            .messages({
                "any.required": "This field is required.",
                "string.empty": "This field is empty, please, introduce a name.",
                "string.min": "This field is required, please, introduce a name with a minimum of 2 letters.",
            })
            ,
            category: joi
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
            price: joi
            .number()
            .required()
            .min(1)
            .messages({
                "any.required": "This field is required.",
                "number.empty": "This field is empty, please, introduce a number."
                
            }),
            image: joi
            .string()
            .required()
            .uri()
            .messages({
                "any.required": "This field is required.",
                "string.uri": "This field is required, please, introduce a photo."
            }),
            description: joi
            .string()
            .required()
            .messages({
                "any.required": "This field is required.",
                "string.empty": "This field is empty, please, introduce a text."
            }),
            userId: joi
            .string()
            .required()
})

module.exports = schema
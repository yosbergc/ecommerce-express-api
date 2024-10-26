const joi = require('joi')

const productSchema = joi.object({
    nombre: joi.string().min(3).max(60).required(),
    precio: joi.number().min(0).required(),
    categoria: joi.string().required()
})

module.exports = productSchema;
const express = require('express')
const products = require('../products')
const router = express.Router()

router.get('/', (req, res) => {
    res.json(products)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send('Incorrect ID')
    }
    const idNumber = parseInt(id)
    const product = products.find(product => product.id === idNumber)

    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})

router.post('/', (req, res) => {
    const { nombre, precio, categoria } = req.body;
    if (!nombre || !precio || !categoria) {
        return res.status(400).send('Bad request')
    }
    products.push({
        nombre,
        precio,
        categoria
    })

    res.status(201).json({
        message: "Created",
        product: {
            nombre,
            precio,
            categoria
        }
    })
})

module.exports = router;
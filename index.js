const express = require('express')
const cors = require('cors')
const PORT = process.env.port || 5000
const app = express()

const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')


app.use(cors())
app.use(express.json())

app.use('/products', productsRouter)
app.use('/users', usersRouter)



app.get('/', (req, res) => {
    res.send('Bienvenido a mi API')
})



app.listen(PORT)
const express = require('express')
const morgan = require('morgan')
const contactRoutes = require('./contactRoutes')

const app = express()
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/contacts', contactRoutes)

app.get('*', (req, res) =>
    res.send('Please use the correct Routes')
)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))

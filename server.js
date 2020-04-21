const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World, nodemon installed'))

app.listen(5000, () => console.log("Server running at port 5000!"))
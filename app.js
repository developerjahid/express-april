const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }))

//root
app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/',function(req,res) {
    let {num1, num2} = req.body
    let result = Number(num1) + Number(num2)
    res.send(`The result of the Calculation is ${result}`)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))

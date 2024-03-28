const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.use('/', require('./routes/route'))


const PORT = process.env.process  || 9000
app.listen(PORT, console.log(`listening to PORT ${PORT}`))
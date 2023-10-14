const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()

app.use(cors())//debug project
app.use(bodyParser.json())//Convert data 

let db = [
    { id: 1, name: 'Alireza', info: 'Alireza Zare', pass: '1524' },
    { id: 2, name: 'mohammed', info: 'mohammed mohammadi', pass: '1596' },
    { id: 3, name: 'yaser', info: 'yaser azizi', pass: '2573' },

]



app.post('/api/new-user', (req, res) => {
    console.log(req.body);
    res.send('new user registered in site successfully')
})


app.listen(3000, () => {
    console.log('server run in port 3000');
})


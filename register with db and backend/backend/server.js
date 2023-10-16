const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/usersRoutes')


const app = express()
app.use(bodyParser.json())//! convsrt data
app.use(cors())//! debug parse cors

app.use('/api/users', usersRoutes)


// console.log(date);

app.listen(3000,()=>{
    console.log('server running in port 3000');
})


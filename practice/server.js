let url = require('url')
let http = require('http')
let express = require('express')
const bodyParser = require('body-parser')

const app = express()

//parse data to get data with body-parser
app.use(bodyParser.json())
//or with express
// app.use(express.json({ extended: false }))




let db = {
    users: [
        { id: 1, name: 'alireza', pass: '123456', phoneNumber: "09036439883" },
        { id: 2, name: 'Amin', pass: '654321', phoneNumber: "09036439883" },
        { id: 3, name: 'Zahra', pass: '4874864', phoneNumber: "09036439883" },
        { id: 4, name: 'Hammid', pass: 'hiu6597', phoneNumber: "09036439883" },
        { id: 5, name: 'Saheb', pass: '16874684', phoneNumber: "09036439883" },
        { id: 6, name: 'Naser', pass: '789456', phoneNumber: "09036439883" },
        { id: 7, name: 'Mahdi', pass: '798537', phoneNumber: "09036439883" },
        { id: 8, name: 'Yashar', pass: '1597532', phoneNumber: "09036439883" },
        { id: 9, name: 'Ebrahim', pass: '852741', phoneNumber: "09036439883" },
        { id: 10, name: 'Elaheh', pass: '96356', phoneNumber: "09036439883" },
    ],
    courses: [
        { id: 1, title: 'React Course', price: 2_000_000 },
        { id: 2, title: 'Vue Course', price: 2_000_000 },
        { id: 3, title: 'js Course', price: 2_000_000 },
        { id: 4, title: 'html Course', price: 2_000_000 },
        { id: 5, title: 'css Course', price: 2_000_000 },
    ]
}





// app.get('/api/products', (req, res) => {
//     res.send('wellcome to my shop')
// })





// app.get('/api/admins', (req, res) => {
//     res.send('well come admins"s room')
// })





// app.delete('/api/users/remove/:UserID', (req, res) => {
//     console.log(req.params);
//     res.send('user deleted successfuly')
// })





// app.get('/users/:userID/articles/:articleID', (req, res) => {
//     console.log(req.params);
//     res.send(`Article Id :${req.params.articleID} and userId: ${req.params.userID}`)
// })





// app.get('/products/:productName', (req, res) => {
//     console.log(req.params);
//     res.send(`wellcome to my shop ${req.params.productName}`)
// })


app.post('/api/new-user', (req, res) => {
    console.log(req.body);
    let newUserInfoObject = req.body
    db.users.push(newUserInfoObject)
    res.send(`New User Created ==> all users ${JSON.stringify(db.users)}`)
})


app.listen(3000, () => {
    console.log('server run on port 3000');
})






// http.createServer((req, res) => {
//     // const parseUrl = url.parse(req.url)

//     // if (req.method === 'GET' && req.url === '/api/users') {
//     //     let allUsers = database.users
//     //     res.write(JSON.stringify(allUsers))
//     //     res.end()

//     // } else if (req.method === 'GET' && req.url === '/api/courses') {
//     //     let allCourses = database.courses
//     //     res.write(JSON.stringify(allCourses))
//     //     res.end()
//     // }
//     if (req.method === 'GET' && req.url === '/api/products') {

//         res.write('well come to shop')
//         res.end()
//         console.log('server created');
//     }




// }).listen(3000)








const { table } = require('console')
let http = require('http')
let url = require('url')


let database = {
    users: [
        { id: 1, userName: 'alireza', password: '123456', age: 23 },
        { id: 2, userName: 'Amin', password: '654321', age: 16 },
        { id: 3, userName: 'Zahra', password: '4874864', age: 23 },
        { id: 4, userName: 'Hammid', password: 'hiu6597', age: 23 },
        { id: 5, userName: 'Saheb', password: '16874684', age: 23 },
        { id: 6, userName: 'Naser', password: '789456', age: 23 },
        { id: 7, userName: 'Mahdi', password: '798537', age: 23 },
        { id: 8, userName: 'Yashar', password: '1597532', age: 23 },
        { id: 9, userName: 'Ebrahim', password: '852741', age: 23 },
        { id: 10, userName: 'Elaheh', password: '96356', age: 23 },
    ]
}


//! in frontEnd
// fetch('http://localhost:3000/api/users?name=amin')
//     .then(res => res.json())
//     .then(data => {
//         if (data) {
//             alert('user found')
//             console.table(user)
//         } else {
//             alert('user not found')
//         }
//     })



const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*')//access all users


    const urlParams = url.parse(req.url, true)


    if (urlParams.pathname === '/api/users') {
        const mainUser = database.users.filter(user => user.userName.toLowerCase() == urlParams.query.name.toLowerCase())

        if (mainUser.length) {
            res.write(JSON.stringify(mainUser))
            console.log(mainUser);
            res.end()
        } else {
            res.write(JSON.stringify(null))
            console.log('mot found');
            res.end()
        }
    }
})

server.listen(3000)



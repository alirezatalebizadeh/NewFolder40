const express = require('express')
const usersDb = require('../db/userDb')


//! create a routes for users
const usrsRoutes = express.Router()

usrsRoutes.post('/', (req, res) => {
    const body = req.body
    // console.log(body);
    //!connect to db
    usersDb.connect((err) => {
        if (err) {
            console.log('db not connected');
        } else {
            console.log('you connect to db successfully');
            let date = new Date().toLocaleDateString('fa-IR')

            //! create user and add to db
            let newUserInsertQuery =
                `INSERT INTO users VALUES (NULL,'${body.firstname}','${body.lastname}','${body.password}','${date}')`
            usersDb.query(newUserInsertQuery, (error, result) => {

                if (error) {
                    console.log('Insert User Faild', error);
                    res.send('no user created')
                } else {
                    res.send(`one user created with this data ==> ${JSON.stringify(req.body)} `)
                    console.log('one user created');
                }
            })
        }
    })
});

module.exports = usrsRoutes

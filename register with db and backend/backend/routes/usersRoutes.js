const express = require('express')
const usersDb = require('../db/userDb')


//! create a routes for users
const userRoutes = express.Router()

userRoutes.post('/new-user', (req, res) => {
    const body = req.body
    // console.log(body);

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
});


//! get all user
userRoutes.get('/all', (req, res) => {
    console.log('you connect to db successfully');

    //! select allUser
    let getAllUsersQuery = `SELECT * FROM users`

    usersDb.query(getAllUsersQuery, (error, result) => {

        if (error) {
            console.log('we can not get all user ', error);
            res.send('fetch allUsers failed')
        } else {
            res.send(`${JSON.stringify(result)}`)
            // console.log('show all users successfully', result);
        }
    })
})


//! remove user
userRoutes.delete('/remove/:userID', (req, res) => {
    let userID = req.params.userID

    console.log('you connect to db successfully', userID);

    //! delete user
    let deleteUserQuery = `DELETE FROM users WHERE id = ${userID}`

    usersDb.query(deleteUserQuery, (error, result) => {

        if (error) {
            console.log('we can"t delete your user ', error);
            res.send(null)
        } else {
            res.send(`one user deleted :==> ${JSON.stringify(result)}`)
            console.log('your user deleted successfully');
        }
    })
})


//! remove user
userRoutes.put('/edit/:userID', (req, res) => {
    let userID = req.params.userID

    let body = req.body

    // console.log('you connect to db successfully', userID, body);

    //! update user and add to db
    let updateUserQuery = `UPDATE users SET firstname="${body.firstname}",lastname="${body.lastname}",password= "${body.password}" WHERE id = "${userID}"`

    usersDb.query(updateUserQuery, (error, result) => {

        if (error) {
            console.log('we can"t update your user ', error);
            res.send(null)
        } else {
            res.send(`one user updated successfully :==> ${JSON.stringify(result)}`)
            console.log('one user updated successfully');
        }
    })
})










module.exports = userRoutes
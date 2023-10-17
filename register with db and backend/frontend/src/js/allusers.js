let content = document.querySelector('.table-body')
let btnDelete = document.querySelector('.deleteBtn')
let btnUpdate = document.querySelector('.updateBtn')
let firstnameInput = document.querySelector('#firstName')
let lastNameInput = document.querySelector('#lastName')
let passwordInput = document.querySelector('#password')

let UserID = null;
let usersInfo = null;


//! fetch all users
window.addEventListener('load', () => {

    fetch('http://localhost:3000/api/users/all')
        .then(res => res.json())
        .then(users => {
            usersInfo = users;
            // console.log(users);
            users.forEach((user, index) => {
                content.insertAdjacentHTML('beforeend', `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.password}</td>
        <td>
          <button class="btn btn-warning"   data-bs-toggle="modal"
          data-bs-target="#editModal" onclick="getUserIdAnsShowData('${user.id}')">Update</button>
          <button class="btn btn-danger" data-bs-toggle="modal"
          data-bs-target="#myModal" onclick="getUserId('${user.id}')">Delete</button>
        </td>
      </tr>`)
            })
        })

})





function getUserId(id) {
    userID = id
    console.log(userID);
}


//! delete user
function removeUser(id) {
    // console.log(typeof Number(id));
    fetch(`http://localhost:3000/api/users/remove/${Number(id)}`, {
        method: 'DELETE'
    }).then(res => res.json())
        .then(data => console.log(data))
    closeModal()
}

//! close delete modal
function closeModal() {
    document.querySelector('.myModal').classList.remove('show')
    document.querySelector('.myModal').style.display = 'none'
    location.href = './allUsers.html'
}
//! close edit modal 
function closeModalEdit() {
    document.querySelector('.editModal').classList.remove('show')
    document.querySelector('.editModal').style.display = 'none'
    location.href = './allUsers.html'
}


//! fill inputs in modal with user data
function getUserIdAnsShowData(id) {
    userID = id;
    let findUser = usersInfo.filter(user => user.id == userID)

    firstnameInput.value = findUser[0].firstname;
    lastNameInput.value = findUser[0].lastname;
    passwordInput.value = findUser[0].password;

    // console.log(usersInfo);
    // console.log(userID, findUser);
}


//! update user
function updateUser() {

    let updateInfo = {
        firstname: firstnameInput.value,
        lastname: lastNameInput.value,
        password: passwordInput.value
    }

    fetch(`http://localhost:3000/api/users/edit/${userID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateInfo)
    }).then(res => res.text())
        .then(data => console.log(data))
    closeModalEdit()

}



btnUpdate.addEventListener('click', updateUser)


btnDelete.addEventListener('click', () => {
    removeUser(userID)
})
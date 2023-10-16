let content = document.querySelector('.table-body')
let btnDelete = document.querySelector('.deleteBtn')

let UserID = null;


//! fetch all users
window.addEventListener('load', () => {

    fetch('http://localhost:3000/api/users/all')
        .then(res => res.json())
        .then(users => {
            // console.log(users);
            users.forEach((user, index) => {
                content.insertAdjacentHTML('beforeend', `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.password}</td>
        <td>
          <button class="btn btn-warning">Update</button>
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

btnDelete.addEventListener('click', () => {
    removeUser(userID)
})

//! delete user
function removeUser(id) {
    // console.log(typeof Number(id));
    fetch(`http://localhost:3000/api/users/remove/${Number(id)}`, {
        method: 'DELETE'
    }).then(res => res.json())
        .then(data => console.log(data))
    closeModal()
}

function closeModal() {
    document.querySelector('.myModal').classList.remove('show')
    document.querySelector('.myModal').style.display = 'none'
    location.href = './allUsers.html'
}

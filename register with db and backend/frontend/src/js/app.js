let firstnameInput = document.querySelector('.firstnameInput');
let lastnameInput = document.querySelector('.lastnameInput');

let passwordInput = document.querySelector('.passwordInput');
let myForm = document.querySelector('.myForm');



myForm.addEventListener('submit', (event) => {

    event.preventDefault()

    let newUser = {
        firstname: firstnameInput.value,
        lastname: lastnameInput.value,
        password: passwordInput.value
    }


    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(res => res.text())
        .then(data => console.log(data))
})
let firstnameInput = document.querySelector('.firstnameInput');
let lastnameInput = document.querySelector('.lastnameInput');

let passwordInput = document.querySelector('.passwordInput');
let myForm = document.querySelector('.myForm');


//! register user
myForm.addEventListener('submit', (event) => {

    event.preventDefault()

    let newUser = {
        firstname: firstnameInput.value,
        lastname: lastnameInput.value,
        password: passwordInput.value
    }


    fetch('http://localhost:3000/api/users/new-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(res => {
            if (res.status === 200) {
                alert('you register in site successfully')
                firstnameInput.value = ''
                lastnameInput.value = ''
                passwordInput.value = ''


            } else {
                alert('you can not register')
            }
            return res.text()
        }).then((data) => {
            console.log(data);
        })


})




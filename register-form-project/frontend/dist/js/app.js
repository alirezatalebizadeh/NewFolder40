
let userNameinput = document.querySelector('.userName')
let myForm = document.querySelector('.form')

let infoinput = document.querySelector('.info')

let passwordinput = document.querySelector('.password')
let btnSubmit = document.querySelector('.btnSubmit')




myForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let newUserInfoObject = {
        name: userNameinput.value,
        info: infoinput.value,
        pass: passwordinput.value
    }

    fetch('http://localhost:3000/api/new-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserInfoObject)
    })
        .then(res => res.text())
        .then(data => console.log(data))
})







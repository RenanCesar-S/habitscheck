let eye = document.querySelector('#seePassword')
let eyeConfirm = document.querySelector('#seeConfirmPassword')

let named = document.querySelector('#name')
let labelName = document.querySelector('#label-name')
let validName = false

let username = document.querySelector('#user')
let labelUsername = document.querySelector('#label-user')
let validUserName = false

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#label-password')
let validPassword = false

let confirmPassword = document.querySelector('#password-confirm')
let labelConfirmPassword = document.querySelector('#label-password-confirm')
let validConfirmPassword = false

let msgSuccess = document.querySelector('#msg-success')
let msgError = document.querySelector('#msg-error')

/* Validation Content */

named.addEventListener('keyup', ()=>{
    if(named.value.length <= 2) {
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = 'Name *Insiria no mínimo 3 caracteres'
        named.setAttribute('style', 'border-color: red')
        validName = false
    } else {
        labelName.setAttribute('style', 'color: green')
        labelName.innerHTML = 'Name'
        named.setAttribute('style', 'border-color: green')
        validName = true
    }
})


username.addEventListener('keyup', ()=>{
        if(username.value.length <= 4) {
            labelUsername.setAttribute('style', 'color: red')
            labelUsername.innerHTML = 'Username *Insiria no mínimo 5 caracteres'
            username.setAttribute('style', 'border-color: red')
            validUserName = false
        } else {
            labelUsername.setAttribute('style', 'color: green')
            labelUsername.innerHTML = 'Username'
            username.setAttribute('style', 'border-color: green')
            validUserName = true
        }
})


password.addEventListener('keyup', ()=>{
    if(password.value.length <= 5) {
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Password *Insiria no mínimo 6 caracteres'
        password.setAttribute('style', 'border-color: red')
        validPassword = false
    } else {
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = 'Password'
        password.setAttribute('style', 'border-color: green')
        validPassword = true
    }
})


confirmPassword.addEventListener('keyup', ()=>{
    if(password.value != confirmPassword.value) {
        labelConfirmPassword.setAttribute('style', 'color: red')
        labelConfirmPassword.innerHTML = 'Confirm Password *As senhas são diferentes'
        confirmPassword.setAttribute('style', 'border-color: red')
        validConfirmPassword = false
    } else {
        labelConfirmPassword.setAttribute('style', 'color: green')
        labelConfirmPassword.innerHTML = 'Confirm Password'
        confirmPassword.setAttribute('style', 'border-color: green')
        validConfirmPassword = true
    }
})


/* Button Validation to Register */

function register() {
    if(validName && validUserName && validPassword && validConfirmPassword) {
        let userList = JSON.parse(localStorage.getItem('userList') || '[]')

        userList.push(
            {
                nameCad: named.value,
                usernameCad: username.value,
                passwordCad: password.value,
            }
        )

        localStorage.setItem('userList', JSON.stringify(userList))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.innerHTML = ''
        msgError.setAttribute('style', 'display: none')

        setTimeout(()=>{
            window.location.href = '../index.html'
        }, 3000)
        

} else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente.</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
}
}


/* Eye emoji function */

eye.addEventListener('click', ()=> {
    let passwordView = document.querySelector('#password')
    if(passwordView.getAttribute('type') == 'password') {
        passwordView.setAttribute('type', 'text')
    }else {
        passwordView.setAttribute('type', 'password')
    }
})

eyeConfirm.addEventListener('click', ()=> {
    let passwordConfirm= document.querySelector('#password-confirm')
    if(passwordConfirm.getAttribute('type') == 'password') {
        passwordConfirm.setAttribute('type', 'text')
    }else {
        passwordConfirm.setAttribute('type', 'password')
    }
})

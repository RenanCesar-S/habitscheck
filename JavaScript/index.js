let user = document.querySelector('#user')
let labelUser = document.querySelector('#label-user')

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#label-password')

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

function login() {
    
    let userList = []

    let userValid = {
        name: '',
        user: '',
        password: '',
    }
    

    userList = JSON.parse(localStorage.getItem('userList'))

    if(localStorage.getItem('userList') == null && user.value == '' && password.value == '') {
        labelUser.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        labelPassword.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Campos não preenchidos.'
        user.focus()
    } else if(localStorage.getItem('userList') == null) {
        labelUser.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        labelPassword.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou Senha incorretos.'
        user.focus()
    }

    userList.forEach((item) => {
        if(user.value == item.usernameCad && password.value == item.passwordCad){
            userValid = {
                name: item.nameCad,
                user: item.usernameCad,
                password: item.passwordCad,
            }
        }
    })

    if(user.value == '' && password.value == '') {
        labelUser.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        labelPassword.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Campos não preenchidos.'
        user.focus()
    } else if(user.value == userValid.user && password.value == userValid.password) {
        
        localStorage.setItem('connect', JSON.stringify(userValid))
        let connect = JSON.parse(localStorage.getItem('connect'))

        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = `Bem-vindo(a) ${connect.name}...`
        setTimeout(()=>{
            window.location.href = '../HTML/main.html'
        }, 2000)

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)


    } else {
        labelUser.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        labelPassword.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou Senha incorretos.'
        user.focus()
    }
}
let btnlogin = document.querySelector('#login')
let form = document.querySelector('#form')

form.addEventListener('submit', (event)=> {

    event.preventDefault()

    const user = document.querySelector('#user')
    const pass = document.querySelector('#password')
    let userConfirm = user.value
    let passConfirm = pass.value

    if(userConfirm == "admin" && passConfirm == "admin") {
    window.location.href = "./HTML/main.html"
    return
    } else {
        alert('❌Insira o usuario e senha CORRETA❌')
        alert('Para acessar use a palavra: admin, para username e password')
    }
})

const createAccount = document.querySelector('#createAccount')

function maintenance() {
    alert('[ERROR] Esta função está em manutenção, por favor use a palavra: admin, como username e password para acessar! Agraçemos a compreensão!!!🥰')
}

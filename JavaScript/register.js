let eye = document.querySelector('#seePassword')

eye.addEventListener('click', ()=> {
    let passwordView = document.querySelector('#password')
    if(passwordView.getAttribute('type') == 'password') {
        passwordView.setAttribute('type', 'text')
    }else {
        passwordView.setAttribute('type', 'password')
    }
})

let eyeConfirm = document.querySelector('#seeConfirmPassword')

eyeConfirm.addEventListener('click', ()=> {
    let passwordConfirm= document.querySelector('#password-confirm')
    if(passwordConfirm.getAttribute('type') == 'password') {
        passwordConfirm.setAttribute('type', 'text')
    }else {
        passwordConfirm.setAttribute('type', 'password')
    }
})
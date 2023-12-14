'use stricts'

const btnSubmit = document.getElementsByClassName('btn-submit')[0]
const reqEmail = document.getElementById('email')
const userEmail = document.getElementById('user_email')
const thanksContainer = document.getElementsByClassName('thanks_container')[0]
const detailContainer = document.getElementsByClassName('detail_container ')[0]
const invalid = document.getElementsByClassName('warning')[0]
const dismissE1 = document.getElementsByClassName('dismiss')[0]
const signUpImgMobile = document.querySelector('.sign-up-mobile')
const signUpImgDesktop = document.querySelector('.sign-up-desktop')

let varifyingEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const validAndInvalid = function () {
    if (varifyingEmail.test(reqEmail.value)) {
        thanksContainer.classList.remove('hidden')
        detailContainer.classList.add('hidden')
        userEmail.innerHTML = reqEmail.value
    } else {
        invalid.classList.remove('hidden')
        reqEmail.style.border = '1px solid red'
    }
}

btnSubmit.addEventListener('click', () => {
    validAndInvalid()
})
dismissE1.addEventListener('click', () => {
    reqEmail.value = ''
    thanksContainer.classList.add('hidden')
    detailContainer.classList.remove('hidden')
})

if(window.screen.availWidth == 1440 || window.screen.availWidth > 1440){
    signUpImgDesktop.classList.remove('hidden')
    signUpImgMobile.classList.add('hidden')
}
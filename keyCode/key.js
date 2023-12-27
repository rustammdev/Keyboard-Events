const menuHead = document.querySelector('.main-menu')

document.addEventListener('keydown', (e) => {
    menuHead.classList.add('hidden')
})


// key, keycode, code
const key = document.querySelector('.key')
const keyCode = document.querySelector('.keyCode')
const code = document.querySelector('.code')
const mainBody = document.querySelector('.main-body')

document.addEventListener('keydown', (e) => {
    key.textContent = e.key
    keyCode.textContent = e.keyCode
    code.textContent = e.code
    mainBody.classList.remove('hidden')
})
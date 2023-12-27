const menuHead = document.querySelector('.main-menu')

document.addEventListener('keydown', (e) => {
    menuHead.classList.add('hidden')
    console.log(e);
})


// key, keycode, code
const key = document.querySelector('.key')
const keyCode = document.querySelector('.keyCode')
const code = document.querySelector('.code')

document.addEventListener('keydown', (e) => {
    key.textContent = e.key
    keyCode.textContent = e.keyCode
    code.textContent = e.code
})
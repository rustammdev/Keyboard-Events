// // const tg = document.getElementsByTagName('li')
// // console.log(tg);

// // const item = document.getElementsByClassName('title')
// // console.log(item);

// // const gm = document.getElementById('btnDel')
// // gm.onclick((item) => {
    
// // })

// // const jj = document.querySelectorAll('.item')
// // jj.forEach((item) => {

// //     // console.log('Hello  ', item.textContent = );
// // })

// // const by = document.getElementsByTagName('body')


// // const title = document.getElementById('title')
// // title.textContent = 'New text'


// // const it = document.querySelectorAll('.item')
// // it.forEach((item) => {
// //     item.textContent += ' darslari' 
// // })


// // const names = ['Ahror', 'Sardor', 'Donyor']

// // const ol = document.querySelector('.ol')

// // names.forEach((name) => {
// //     ol.innerHTML += `<li>${name}</li>`
// // })

// // const 

/* -----------------   gettAtribute, setAtribut          ------------------------- */

// const lnk = document.querySelector('a')
// console.log(lnk.getAttribute('href'));

// lnk.setAttribute('href', 'https://www.yandex.ru')
// console.log(lnk.getAttribute('href'));

// lnk.setAttribute('target', '__blank')
// lnk.textContent = 'Go to Yandex main page' 

// const par = document.querySelector('p')
// par.setAttribute('class', 'succses')

// par.style.color = 'orange'
// // par.setAttribute('style', 'color: red')

// // console.log(par.getAttribute('class'));

/* -----------------   style      ------------------------- */

// const paragraps = document.querySelectorAll('p')

// paragraps.forEach((item) => {
//     // console.log(item.textContent);
//     if(item.textContent.includes('succes')){
//         item.style.color = 'green';
//     }else if(item.textContent.includes('error')){
//         item.style.color = 'red'
//     }
// })


/* -----------------   classlist(add, remove, toggle)          ------------------------- */
// paragraps.forEach((item) => {
//     if(item.textContent.includes('error')){
//         item.classList.add('error')
//     }else if(item.textContent.includes('succes')){
//         item.classList.add('succes')
//     }
// })


// const ttl = document.querySelector('#title')
// ttl.classList.toggle('succes')
// ttl.classList.toggle('succes')


/* sibling, child element */

// const article = document.querySelector('article')
// Array.from(article.children).forEach((item) => {
//     item.classList.add('article-child') 
// })


/* events, click, addEventListener */

// const btnDel = document.querySelector('#del')
// const btnCreat = document.querySelector('#creat')
// const li = document.querySelectorAll('li')

// btnDel.addEventListener("click", (e) => {
//     li.forEach((item) => {
//         console.log(e.target);
//     })
// })

// const ul = document.querySelector('ul')
// btnCreat.addEventListener('click', ()=> {

//     const li = document.createElement('li')
//     li.textContent = "Something new element"
//     ul.prepend(li)
// })

/* child oraqli del qilish */
// li.forEach((item) => {
//     console.log((item));
//     item.addEventListener('click', (e) => {
//         item.classList.toggle('chiziq')

//         btnDel.addEventListener("click", (e2) => {
//             li.forEach((item2) => { 
//                 if(Array.from(item2.classList).includes('chiziq')){
//                     item2.remove()
//                 }
//             })
//         })

//     })
// })


/* Ota element orqali aniqlash mumkin qaysi biri bosilyotganini */
ul.addEventListener("click", (e)=> {
    e.target.classList.toggle('chiziq')

    console.log(e.target.classList);
    btnDel.addEventListener("click", ()=> {
        if(Array.from(e.target.classList).includes('chiziq')){
            e.target.remove();
        }
    })
})



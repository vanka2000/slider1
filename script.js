const container = document.querySelector('section') 
const leftbtn = document.querySelector('.btn_left')
const rightbtn = document.querySelector('.btn_right')
const navCont = document.querySelector('.nav')
const arrImg = ['./img/картинка3.jpg', './img/картинка4.jpg','./img/картинка5.webp','./img/priroda_kartinki_foto_03.jpg'];
let count = 0;
const arrDote = [];
// const div = document.createElement('div')
// div.style.backgroundImage = `url(${arrImg[0]})`;
// container.append(div)


for(let i = 0; i < arrImg.length; i++){
    const div = document.createElement ('div')
    div.style.backgroundImage = `url(${arrImg[i]})`
    div.classList.add('image_card')
    container.append(div)
    const dote = document.createElement('div')
    dote.classList.add('dote')
    navCont.append(dote)
    arrDote.push(dote) // помещаем кнопки в массив для удобства дальнейшего использования
}
const scrollTo = (countCard) => { 
let cardWidth = document.querySelector('.image_card').clientWidth
container.scroll({top:0,left:cardWidth*countCard,behavior:'smooth'})
count=countCard // ???? чтобы когда мы нажимали на dote,  в count передавался счетчик dote
color(count) 
}

leftbtn.addEventListener('click', () => {
    count > 0 ? --count : count = arrImg.length -1 // либо по порядку,либо чтобы делали скролл и возвращались в конец
    scrollTo(count)
})

rightbtn.addEventListener('click', () => {
    count < arrImg.length - 1 ? ++count : count = 0 //либо по порядку,либо чтобы делали скролл и возвращались в начало
     scrollTo(count)
    })

    arrDote.map((item,index,array) => item.addEventListener('click', () => {
        // array.map((item,index,array) => item.classList.remove('dote_active'))
        // item.classList.add('dote_active')
        scrollTo(index)
    }))

const color = (index) => { 
    arrDote.map((item,index,array) => item.classList.remove('dote_active')) // снимает класс со всех эллементов массива,чтобы снять цвет
        arrDote[index].classList.add('dote_active') // добавляем класс для того чтоб давать цвет выбранным dote
}

arrDote[count].classList.add('dote_active') // в начале загрузки страницы красим первую кнопку


console.log(container.innerHTML)
console.log(container.outerHTML)
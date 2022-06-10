const book = document.querySelectorAll('.book')
const link = document.querySelectorAll('a')
const adv = document.querySelector('.adv')
const list = document.querySelectorAll('ul')
const book2 = list[0].querySelectorAll('li')
const book5 = list[5].querySelectorAll('li')
const book6 = list[2].querySelectorAll('li')

book[0].before(book[1])
book[3].before(book[4])
book[5].after(book[2])

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

link[4].textContent = 'Книга 3. this и Прототипы Объектов'

adv.remove()


book2[4].before(book2[8])
book2[3].after(book2[6])
book2[10].before(book2[2])

book5[4].after(book5[2])
book5[3].before(book5[9])
book5[8].before(book5[5])

let li = document.createElement('li')
li.textContent = 'Глава 8: За пределами ES6'

book6[8].insertAdjacentElement('beforeend', li)

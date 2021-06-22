window.addEventListener('load', () => {})

function handleActiveMenuOnScroll(target) {
    console.log(window.scrollY ,target.getBoundingClientRect().top)
    if (window.scrollY >= target.getBoundingClientRect().top) {
        // console.log('I have been reached ' + target.id);
    }
}

function handleActiveMenuOnClick() {
    let menu = document.querySelectorAll('.navigation__menu__item')
    menu.forEach((item) => {
        item.classList.remove('navigation__menu__item--active')
    })
    event.target.classList.add('navigation__menu__item--active')
}

document.addEventListener('scroll', () => {
    let home = document.querySelector('#intro')
    let work = document.querySelector('#work')
    let contact = document.querySelector('#contact')
    handleActiveMenuOnScroll(home)
    handleActiveMenuOnScroll(work)
    handleActiveMenuOnScroll(contact)
  })
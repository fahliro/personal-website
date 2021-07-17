feather.replace()

window.addEventListener('load', () => {})

function handleActiveMenuOnClick(type) {
    console.log(type)
    let menus = document.querySelectorAll('.navigation__menu__item')
    menus.forEach((item) => {
        item.classList.remove('navigation__menu__item--active')
    })
    let menu = document.querySelector('.navigation__menu__item--' + type)
    menu.classList.add('navigation__menu__item--active')
}

// notes: title line-bottom, trasnsition, pre-loading, overflow-x, bahasa, logo quality
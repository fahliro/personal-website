feather.replace()

window.addEventListener('load', () => {})

function handleActiveMenuOnClick(type) {
    let menus = document.querySelectorAll('.navigation__menu__item')
    menus.forEach((item) => {
        item.classList.remove('navigation__menu__item--active')
    })
    let menu = document.querySelector('.navigation__menu__item--' + type)
    menu.classList.add('navigation__menu__item--active')
}
let toggle = false
function toggleLanguage() {
    let langOption = document.querySelector('.navigation__menu__flag__option')
    if(!toggle) {
        langOption.style.visibility = 'visible'
        toggle = true
    } else {
        langOption.style.visibility = 'hidden'
        toggle = false
    }
}
function switchLanguage(id) {
    localStorage.setItem('lang', id)
    location.reload()
}
function setLanguage() {
    let language = document.querySelector('.navigation__menu__flag > img')
    let path = './assets/images/'
    if(localStorage.getItem('lang') == null) {
        localStorage.setItem('lang','id')
    } else {
        language.src = localStorage.getItem('lang') == 'id' ? path + '17852.svg' : path + '/17353.svg'
    }
}
setLanguage()
function handleLanguage() {
    let navigationMenuHome = document.querySelector('.navigation__menu a:nth-child(1) .navigation__menu__item')
    let navigationMenuPackage = document.querySelector('.navigation__menu a:nth-child(2) .navigation__menu__item')
    let navigationMenuContact = document.querySelector('.navigation__menu a:nth-child(3) .navigation__menu__item')
    let introGreetingsName = document.querySelector('.intro__greetings__name')
    let introGreetingsDesc = document.querySelector('.intro__greetings__desc > p')
    let introCTA = document.querySelector('.intro__cta p')
    let packageTitle = document.querySelector('.package__title')
    let packageCardContentBasic = document.querySelectorAll('.package__card__content')[0]
    let packageCardContentProfessional = document.querySelectorAll('.package__card__content')[1]
    let packageCardButton = document.querySelectorAll('.package__card__button button')
    let contactTitle = document.querySelector('.contact__title')
    let contactText = document.querySelector('.contact > div > div:nth-child(2) p')
    let contactButton = document.querySelector('.contact > div > div:nth-child(2) button')
    let contactFooterText = document.querySelector('.contact__footer__text > div')
    if(localStorage.getItem('lang') == 'en') {
        console.log(navigationMenuHome, navigationMenuPackage, navigationMenuContact)
        navigationMenuHome.innerText = 'Home'
        navigationMenuPackage.innerText = 'Package'
        navigationMenuContact.innerText = 'Contact'
        introGreetingsName.innerText = `Hi, I'm Robby`
        introGreetingsDesc.innerText = `I will create a showcase website for your business by prioritizing aesthetics`
        introCTA.innerText = `See the package below`
        packageTitle.innerText = `Package`
        packageCardContentBasic.innerText = `By choosing the Professional package, you will get the website source code (excluding domain and hosting) with the appearance you want (maximum 5 pages/menu), already using multi-language (Indonesian and English), dashboard (to change your own content), dashboard documentation (how to change content), and support guarantee (if an error occurs on the website) for 1 month, starting from the time the website has been completed.`
        packageCardContentProfessional.innerText = `By choosing the Professional package, you will get the website source code (excluding domain and hosting) with the appearance you want (maximum 5 pages/menu), already using multi-language (Indonesian and English), dashboard (to change your own content), dashboard documentation (how to change content), and support guarantee (if an error occurs on the website) for 1 month, starting from the time the website has been completed.`
        packageCardButton.forEach((button) => {
            button.innerText = `Get It Now`
        })
        contactTitle.innerText = `Contact`
        contactText.innerText = `If there is anything you want to ask, please let me know`
        contactButton.innerText = `Contact Me`
        contactFooterText.innerText = `Designed with`
    }
}
handleLanguage()
// notes: title line-bottom, trasnsition, pre-loading, logo quality, hide page source
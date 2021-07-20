feather.replace()
function handleActiveMenuOnClick(type) {
    let menus = document.querySelectorAll('.navigation__menu__link__item')
    menus.forEach((item) => {
        item.classList.remove('navigation__menu__link__item--active')
    })
    let menu = document.querySelector('.navigation__menu__link__item--' + type)
    menu.classList.add('navigation__menu__link__item--active')
}
let navigationMenuFlagOption = document.querySelector('.navigation__menu__flag__option')
let navigationMenuLink = document.querySelector('.navigation__menu__link')
function toggle(type) {
    if(type == 'language' ? navigationMenuFlagOption.style.visibility == 'visible' : navigationMenuLink.style.visibility == 'visible') {
        setTimeout(() => {
            type == 'language' ? navigationMenuFlagOption.style.visibility = 'hidden' : navigationMenuLink.style.visibility = 'hidden'
        }, 0)
    } else {
        setTimeout(() => {
            type == 'language' ? navigationMenuFlagOption.style.visibility = 'visible' : navigationMenuLink.style.visibility = 'visible'
        }, 0)
    }
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
function switchLanguage(id) {
    localStorage.setItem('lang', id)
    location.reload()
}
function handleLanguage() {
    let link = 'https://api.whatsapp.com/send/?phone=6283877645848&text='
    let navigationMenuHome = document.querySelector('.navigation__menu__link a:nth-child(1) .navigation__menu__link__item')
    let navigationMenuPackage = document.querySelector('.navigation__menu__link a:nth-child(2) .navigation__menu__link__item')
    let navigationMenuFaq = document.querySelector('.navigation__menu__link a:nth-child(3) .navigation__menu__link__item')
    let navigationMenuContact = document.querySelector('.navigation__menu__link a:nth-child(4) .navigation__menu__link__item')
    let introGreetingsName = document.querySelector('.intro__greetings__name')
    let introGreetingsDesc = document.querySelector('.intro__greetings__desc > p')
    let introCTA = document.querySelector('.intro__cta p')
    let packageTitle = document.querySelector('.package__title')
    let packageCardContentBasic = document.querySelectorAll('.package__card__content')[0]
    let packageCardContentProfessional = document.querySelectorAll('.package__card__content')[1]
    let packageCardButton = document.querySelectorAll('.package__card__button button')
    let packageCardButtonLink = document.querySelectorAll('.package__card__button a')
    let faqTitle = document.querySelector('.faq__title')
    let faqContentQuestion = document.querySelectorAll('.faq__content__question')
    let faqContentAnswer = document.querySelectorAll('.faq__content__answer')
    let contactTitle = document.querySelector('.contact__title')
    let contactText = document.querySelector('.contact > div > div:nth-child(2) p')
    let contactButton = document.querySelector('.contact > div > div:nth-child(2) button')
    let contactLink = document.querySelector('.contact > div > div:nth-child(2) a')
    let contactFooterText = document.querySelector('.contact__footer__text > div')
    if(localStorage.getItem('lang') == 'en') {
        navigationMenuHome.innerText = 'Home'
        navigationMenuPackage.innerText = 'Package'
        navigationMenuFaq.innerText = 'FAQ'
        navigationMenuContact.innerText = 'Contact'
        introGreetingsName.innerText = `Hi, I'm Robby`
        introGreetingsDesc.innerText = `I will create a Showcase Website for your business by prioritizing Aesthetics`
        introCTA.innerText = `See the Package below`
        packageTitle.innerText = `Package`
        packageCardContentBasic.innerText = `By choosing the Basic package, you will get the website source code (excluding domain and hosting) with the design on you (maximum 5 pages/menu), already using multi-language (Indonesian and English), and support guarantee (design revision/content change) for 1 month, starting from the time the website has been completed.`
        packageCardContentProfessional.innerText = `By choosing the Professional package, you will get the website source code (excluding domain and hosting) with the design on you (maximum 5 pages/menu), already using multi-language (Indonesian and English), dashboard (to change your own content), dashboard documentation (how to change content), and support guarantee (if an error occurs on the website) for 1 month, starting from the time the website has been completed.`
        packageCardButton.forEach((button) => {
            button.innerText = `Order Now`
        })
        packageCardButtonLink[0].href = link + 'Hi,%20I%20want%20to%20order%20a%20Basic%20package%20'
        packageCardButtonLink[1].href = link + 'Hi,%20I%20want%20to%20order%20a%20Professional%20package%20'
        faqTitle.innerText = `Frequently Asked Questions`
        faqContentQuestion[0].querySelector('div').innerText = `What is Showcase Website?`
        faqContentQuestion[1].querySelector('div').innerText = `What is Source Code?`
        faqContentQuestion[2].querySelector('div').innerText = `What is Domain and Hosting?`
        faqContentQuestion[3].querySelector('div').innerText = `What are the advantages offered by robbyDev?`
        faqContentQuestion[4].querySelector('div').innerText = `What to prepare if you want to order Website?`
        faqContentAnswer[0].innerText = `Showcase Website is a website that is used to display Products or Services with the aim of increasing Brand Awareness`
        faqContentAnswer[1].innerText = `Source Code is a collection of Code that is used to create a website`
        faqContentAnswer[2].innerText = `Domain is the name/address of a website and is Unique, while Hosting is a storage service for storing websites so that they can be accessed Online`
        faqContentAnswer[3].innerHTML = `
            With prices starting from Rp 1.000.000, you have got a website ready to go Online with the following :
            <ul>
                <li>Design on you</li>
                <li>5 pages/menu</li>
                <li>Multi-language</li>
            </ul>
        `
        faqContentAnswer[4].innerHTML = `
            Things that must be prepared if you want to order a website are :
            <ul>
                <li>Design (Figma, Adobe XD, dll) or website reference</li>
                <li>Content (images and text)</li>
                <li>Domain and Hosting if available, if not, I can help with additional costs starting from Rp 500.000</li>
            </ul>
        `
        contactTitle.innerText = `Contact`
        contactText.innerText = `If there is anything you want to ask, please let me know by clicking the button below`
        contactButton.innerText = `Contact Me`
        contactLink.href = link + 'Hi,%20I%20want%20to%20ask%20something%20'
        contactFooterText.innerText = `Designed with`
    }
}
handleLanguage()
document.addEventListener('click', () => {
    if(navigationMenuFlagOption.style.visibility == 'visible') {
        toggle('language')
    }
    if(navigationMenuLink.style.visibility == 'visible') {
        toggle('menu')
    }
})
function handleLoading() {
    let loader = document.querySelector('.loader')
    let content = document.querySelector('.content')
    setTimeout(() => {
        loader.style.opacity = 0
        content.style.opacity = 1
        content.style.position = 'unset'
    }, 1500)
}
handleLoading()
function toggleFAQ() {
    let faqContentQuestion = document.querySelectorAll('.faq__content__question')
    let faqContentAnswer = document.querySelectorAll('.faq__content .col-12.faq__content__answer')
    faqContentQuestion.forEach((faq, index) => {
        faq.addEventListener('click', ()=> {
            if(faqContentAnswer[index].style.visibility == 'visible') {
                faqContentAnswer[index].style.marginTop = 0
                faqContentAnswer[index].style.visibility = 'hidden'
                faqContentAnswer[index].style.height = 0
                faqContentAnswer[index].style.padding = '0 15px'

                faq.querySelectorAll('svg')[0].style.transform = 'rotate(0deg)'
            } else {
                faqContentAnswer[index].style.marginTop = '10px'
                faqContentAnswer[index].style.visibility = 'visible'
                faqContentAnswer[index].style.height = 'auto'
                faqContentAnswer[index].style.padding = '15px'
                
                faq.querySelectorAll('svg')[0].style.transform = 'rotate(90deg)'
            }
        })
    })
}
toggleFAQ()
// dashboard
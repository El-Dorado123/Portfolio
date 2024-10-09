const AboutButton=document.querySelector('.about-me')
const popup=document.querySelector('.popup')
const Button=document.querySelector('.popup-btn')
const Header=document.querySelector('header')
const Links=document.querySelectorAll('.contact-links')


AboutButton.addEventListener('click',()=>{
    popup.classList.remove('popup')
    document.body.style.overflowY='hidden'
    Header.style.visibility='hidden'
    Links.forEach(link=>link.style.visibility='hidden')
})

Button.addEventListener('click',()=>{
    popup.classList.add('popup')
    document.body.style.overflowY='scroll'
    Header.style.visibility='visible' 
    Links.forEach(link=>link.style.visibility='visible')
})

const elNav = document.querySelector('.site-header')
const elBurger = document.querySelector('.site-header__burger')

elBurger.addEventListener('click', ()=> {
  elNav.classList.toggle('nav--open')
})
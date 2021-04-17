const elNav = document.querySelector('.site-header')
const elBurger = document.querySelector('.site-header__burger')
const elHeader = document.querySelector(".site-header")
const elNavLinks = document.querySelectorAll(".nav__link")
const elNavList = document.querySelector(".nav__list")


// Burger Menu
elBurger.addEventListener('click', ()=> {
  elNav.classList.toggle('nav--open')
})


//  Debounce Function
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};




window.addEventListener('scroll', ()=> {
	let fromTop = window.scrollY;

	if(window.scrollY >= 200) {
		elHeader.classList.add('site-header--fixed')
		document.body.style.marginTop= elHeader.clientHeight + 'px'
	} else {
		elHeader.classList.remove('site-header--fixed')
		document.body.style.marginTop = 0
	}

	elNavLinks.forEach(item => {
		const section = document.querySelector(item.hash)
		if(
			section.offsetTop <= fromTop &&
			section.offsetTop + section.offsetHeight > fromTop
		) {
			item.classList.add('active')
		} else {
			item.classList.remove('active')
		}
	})
})
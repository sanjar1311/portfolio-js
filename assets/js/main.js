const elNav = document.querySelector('.site-header')
const elBurger = document.querySelector('.site-header__burger')
const elHeader = document.querySelector(".site-header")

elBurger.addEventListener('click', ()=> {
  elNav.classList.toggle('nav--open')
})

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

function onDocumentScroll(){
  if(window.scrollY >= 200) {
    elHeader.classList.add('site-header--fixed')
    document.body.style.marginTop= elHeader.clientHeight + 'px'
  } else {
    elHeader.classList.remove('site-header--fixed')
    document.body.style.marginTop = 0
  }
}

window.addEventListener('scroll', debounce(onDocumentScroll, 500))

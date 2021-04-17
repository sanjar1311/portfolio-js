// const data = [
// 	{
// 		src: "./assets/images/stroy-control.png",
// 		lang: ["HTML", "Scss", "Js"],
// 		title: "Строй Контроль",
// 		netlify: "https://stroy-kontrol-sanjar.netlify.app",
// 		git: "https://github.com/sanjar1311/stroy-kontrol"
// 	},
// 	{
// 		src: "./assets/images/tmdb.png",
// 		lang: ["React"],
// 		title: "TMDB movies",
// 		netlify: "https://rmdbmoviesuz.netlify.app",
// 		git: "https://github.com/sanjar1311/tmdbmovies"
// 	},
// 	{
// 		src: "./assets/images/filter.png",
// 		lang: ["HTML", "Scss", "Js"],
// 		title: "Grandma",
// 		netlify: "https://filter-project-cackes.netlify.app",
// 		git: "https://github.com/sanjar1311/p-8--filter-project"
// 	},
// 	{
// 		src: "./assets/images/myteab.png",
// 		lang: ["HTML", "Scss", "Js"],
// 		title: "My-team",
// 		netlify: "https://myteam-sanjar.netlify.app",
// 		git: "https://github.com/sanjar1311/myteam"
// 	},
// 	{
// 		src: "./assets/images/dental.png",
// 		lang: ["HTML", "Scss", "Js"],
// 		title: "Dental Practice",
// 		netlify: "https://dental-practice-sanjar.netlify.app",
// 		git: "https://github.com/sanjar1311/dental-practic"
// 	},
// 	{
// 		src: "./assets/images/fylo.png",
// 		lang: ["HTML", "Scss", "Js"],
// 		title: "Fylo",
// 		netlify: "https://fylo-sanjar.netlify.app",
// 		git: "https://github.com/sanjar1311/fylo"
// 	}
// ]

const elNav = document.querySelector('.site-header')
const elBurger = document.querySelector('.site-header__burger')
const elHeader = document.querySelector(".site-header")
const elNavLinks = document.querySelectorAll(".nav__link")
const elNavList = document.querySelector(".nav__list")
const elProjectsItemTemplate = document.querySelector('.projects-item-template')
const elProjectsOutput = document.querySelector('.projects__list')


// Burger Menu
elBurger.addEventListener('click', ()=> {
  elNav.classList.toggle('nav--open')
})


// Scroll
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
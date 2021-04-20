const DATA = [
	{
		src: "./assets/images/stroy-control.png",
		lang: ["HTML", "Scss", "Js"],
		title: "Строй Контроль",
		netlify: "https://stroy-kontrol-sanjar.netlify.app",
		git: "https://github.com/sanjar1311/stroy-kontrol"
	},
	{
		src: "./assets/images/tmdb.png",
		lang: ["React"],
		title: "TMDB movies",
		netlify: "https://rmdbmoviesuz.netlify.app",
		git: "https://github.com/sanjar1311/tmdbmovies"
	},
	{
		src: "./assets/images/filter.png",
		lang: ["HTML", "Scss", "Js"],
		title: "Grandma",
		netlify: "https://filter-project-cackes.netlify.app",
		git: "https://github.com/sanjar1311/p-8--filter-project"
	},
	{
		src: "./assets/images/myteab.png",
		lang: ["HTML", "Scss", "Js"],
		title: "My-team",
		netlify: "https://myteam-sanjar.netlify.app",
		git: "https://github.com/sanjar1311/myteam"
	},
	{
		src: "./assets/images/dental.png",
		lang: ["HTML", "Scss", "Js"],
		title: "Dental Practice",
		netlify: "https://dental-practice-sanjar.netlify.app",
		git: "https://github.com/sanjar1311/dental-practic"
	},
	{
		src: "./assets/images/fylo.png",
		lang: ["HTML", "Scss", "Js"],
		title: "Fylo",
		netlify: "https://fylo-sanjar.netlify.app",
		git: "https://github.com/sanjar1311/fylo"
	}
]

const elNav = document.querySelector('.site-header')
const elBurger = document.querySelector('.site-header__burger')
const elHeader = document.querySelector(".site-header")
const elNavLinks = document.querySelectorAll(".nav__link")
const elNavList = document.querySelector(".nav__list")


// Burger Menu
elBurger.addEventListener('click', ()=> {
  elNav.classList.toggle('nav--open')
})


// Scroll
window.addEventListener('scroll', ()=> {
	let fromTop = window.scrollY;

	elNavLinks.forEach(item => {
		const section = document.querySelector(item.hash)
		if(
			elHeader.offsetTop <= fromTop &&
			elHeader.offsetTop + elHeader.offsetHeight > fromTop
		) {
		} else if(
			section.offsetTop <= fromTop &&
			section.offsetTop + section.offsetHeight > fromTop
		) {
			item.classList.add('active')
		} else {
			item.classList.remove('active')
		}

		item.addEventListener('click', ()=> {
			elNav.classList.remove('nav--open')
		})
	})
})

//===    S E A R CH   F O R M    ===//

const elProjectsForm = document.querySelector(".projects__form")
const elProjectsInput = document.querySelector(".projects__input")
const elProjectsItemTemplate = document.querySelector(".projects-item-template").content
const elProjectsOutput = document.querySelector('.projects__list')
const elProjectsBtns = document.querySelectorAll(".projects__btn")


function displayProjects(array) {
	elProjectsOutput.innerHTML = ""
	let projectsFragment = document.createDocumentFragment()
	
	for(let i = 0; i < array.length; i++) {
		let projectItem = elProjectsItemTemplate.cloneNode(true)
		
		projectItem.querySelector(".projects__img").src = array[i].src;
		
		projectItem.querySelector(".projects__item-title").textContent = array[i].title
		projectItem.querySelector(".projects__netlify").href = array[i].netlify
		projectItem.querySelector(".projects__git").href = array[i].git
		for(let m = 0; m < array[i].lang.length; m++) {
				projectItem.querySelector(".projects__langs").textContent = array[i].lang[m]
			}
			
			projectsFragment.appendChild(projectItem)
		}
		elProjectsOutput.appendChild(projectsFragment)
	}
	
	displayProjects(DATA)
	
	
	elProjectsForm.addEventListener('submit', (e)=> {
		e.preventDefault()
		let inputReg = new RegExp(elProjectsInput.value, "gi")
		let searchReasult = [];
		
		for(let i = 0; i < DATA.length; i++) {
			for(let n = 0; n < DATA[i].lang.length; n++) {
				if(DATA[i].lang[n].match(inputReg)){
					searchReasult.push(DATA[i])
				}
			}
		}
		
		elProjectsInput.value = ""
		displayProjects(searchReasult)
	})


	//===   S O R T    B T N S   ===//

	let react = []
	for(let i = 0; i < DATA.length; i++) {
		for(let n = 0; n < DATA[i].lang.length; n++) {
			if(DATA[i].lang[n] === "React"){
				react.push(DATA[i])
			}
		}
	}

	let js = []
	for(let i = 0; i < DATA.length; i++) {
		for(let n = 0; n < DATA[i].lang.length; n++) {
			if(DATA[i].lang[n] === "Js"){
				js.push(DATA[i])
			}
		}
	}

	elProjectsBtns.forEach(item => {
		item.addEventListener("click", (e)=> {
			if(e.target.classList.contains("projects__all-btn")) {
				displayProjects(DATA)
			}
			if(e.target.classList.contains("projects__js-btn")) {
				displayProjects(js)
			}
			if(e.target.classList.contains("projects__react-btn")) {
				displayProjects(react)
			}
		})
	})

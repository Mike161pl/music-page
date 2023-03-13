const footerYear = document.querySelector('.footer__year')
const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.nav__list-burger-btn')
const allNavItems = document.querySelectorAll('.nav__list-item')

const handleNav = () => {
	nav.classList.toggle('active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
		})
	})
}
let tag = document.createElement('script')

tag.src = 'https://www.youtube.com/iframe_api'
let firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

let player
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player-two', {
		videoId: 'RMDWeQHgUrA',
	})
	player = new YT.Player('player-one', {
		videoId: 'eK8l4q_dFv0',
	})
	player = new YT.Player('player-three', {
		videoId: 'fP9i4yqvGHY',
	})
	player = new YT.Player('player-four', {
		videoId: 'C-u5WLJ9Yk4',
	})
}

const currentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

currentYear()
navBtn.addEventListener('click', handleNav)

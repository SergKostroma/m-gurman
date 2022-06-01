// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	const redButtons = document.querySelectorAll('.red-button')
	for (let redButton of redButtons){
		redButton.addEventListener ('click', redButtonActivizer)
		function redButtonActivizer(){
			redButton.classList.toggle('red-button-active')
		}
	} 
    
	const whiteButtons = document.querySelectorAll('.white-button')
	for (let whiteButton of whiteButtons){
		whiteButton.addEventListener ('click', whiteButtonActivizer)
		function whiteButtonActivizer(){
			whiteButton.classList.toggle('white-button-active')
		}
	}




})

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

})

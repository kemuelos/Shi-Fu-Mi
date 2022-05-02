// get html elements
const play_button = document.querySelector("#play");
const pseudo_input = document.querySelector("#pseudo");

const retour_button = document.querySelector("#return");

// get divs by id
const div_menu = document.getElementById("menu");
const div_jeu = document.getElementById("jeu");

// get pseudo
const pseudo = pseudo_input.value;

play_button.addEventListener("click", (e) => {
	// console.log(div_jeu.classList);

	// toggle : css class on/off for this selected element
	div_jeu.classList.toggle("invisible");

	// console.log(div_jeu.classList);

	console.log(div_menu.classList);
	div_menu.classList.toggle("invisible");
});

retour_button.addEventListener("click", (e) => {
	div_menu.classList.toggle("invisible");

	div_jeu.classList.toggle("invisible");
});

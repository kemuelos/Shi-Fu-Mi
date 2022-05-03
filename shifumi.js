function random(min = 0, max = 2) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function win_condition(player_choice, computer_choice) {
	if (player_choice === computer_choice) {
		return "égalité";
	} else if (
		(player_choice === "pierre" && computer_choice === "ciseaux") ||
		(player_choice === "ciseaux" && computer_choice === "papier") ||
		(player_choice === "papier" && computer_choice === "pierre")
	) {
		return "gagné";
	} else {
		return "perdu";
	}
}

// get html elements
const play_button = document.querySelector("#play");
const pseudo_input = document.querySelector("#pseudo");

const player_choices = document.querySelectorAll(".player_choice");

const retour_button = document.querySelector("#return");

const player_h1 = document.querySelector("#player_move");
const computer_h1 = document.querySelector("#computer_move");

// get divs by id
const div_menu = document.getElementById("menu");
const div_jeu = document.getElementById("jeu");

play_button.addEventListener("click", (e) => {
	// console.log(pseudo_input.value);

	// toggle : css class on/off for this selected element
	div_jeu.classList.toggle("invisible");

	div_menu.classList.toggle("invisible");

	const pseudo = pseudo_input.value;
});

retour_button.addEventListener("click", (e) => {
	div_menu.classList.toggle("invisible");

	div_jeu.classList.toggle("invisible");
});

const IA_moves = ["pierre", "papier", "ciseaux"];

// player choice
for (const button of player_choices) {
	button.addEventListener("click", (e) => {
		const player_choice = e.target.id;

		const computer_move = random();
		const computer_choice = IA_moves[computer_move];
		// console.log({ computer_move });

		player_h1.innerText = player_choice;
		computer_h1.innerText = computer_choice;
		const resultat = win_condition(player_choice, computer_choice);
		console.log(win_condition(player_choice, computer_choice));
		setTimeout(() => {
			alert(resultat);
			
		}, 200);
	});
}


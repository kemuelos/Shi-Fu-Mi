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
		compteur_player++;
		if (compteur_ia > 0) compteur_ia--;
		console.log({ compteur_player, compteur_ia });
		return "gagné";
	} else {
		if (compteur_player > 0) compteur_player--;
		compteur_ia++;
		console.log({ compteur_player, compteur_ia });
		return "perdu";
	}
}

function score(compteur_player, compteur_ia) {
	if (compteur_player == manche_input.value) {
		div_jeu.classList.toggle("invisible");
		msg_winner.classList.toggle("invisible");

		setTimeout(() => {
			location.reload();
		}, 1500);
		return "vous avez gagné";
	} else if (compteur_ia == manche_input.value) {
		div_jeu.classList.toggle("invisible");
		msg_looser.classList.toggle("invisible");

		setTimeout(() => {
			location.reload();
		}, 1500);

		return "vous avez perdu";
	} else {
		return "continue";
	}
}

// get html elements
const play_button = document.querySelector("#play");
const manche_input = document.querySelector("#manche");
const pseudo_input = document.querySelector("#pseudo");

const player_choices = document.querySelectorAll(".player_choice");

const retour_button = document.querySelector("#return");

// const player_h1 = document.querySelector("#player_move");
// const computer_h1 = document.querySelector("#computer_move");

const msg_winner = document.querySelector("#winner");
const msg_looser = document.querySelector("#looser");

// get divs by id
const div_menu = document.getElementById("menu");
const div_jeu = document.getElementById("jeu");

const player_pierre = document.getElementById("img-pierre-player");
const player_papier = document.getElementById("img-papier-player");
const player_ciseaux = document.getElementById("img-ciseaux-player");

const computer_pierre = document.getElementById("img-pierre-computer");
const computer_papier = document.getElementById("img-papier-computer");
const computer_ciseaux = document.getElementById("img-ciseaux-computer");

// add event listeners
play_button.addEventListener("click", (e) => {
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
let compteur_player = 0;
let compteur_ia = 0;
const manche = manche_input.value;

// player choice
for (const button of player_choices) {
	button.addEventListener("click", (e) => {
		const player_choice = e.target.id;

		const computer_move = random();
		const computer_choice = IA_moves[computer_move];

		// affichage des images suivant les choix
		if (player_choice === "pierre") {
			player_pierre.classList.toggle("invisible");
			setTimeout(() => {
				player_pierre.classList.toggle("invisible");
			}, 3000);
		} else if (player_choice === "papier") {
			player_papier.classList.toggle("invisible");
			setTimeout(() => {
				player_papier.classList.toggle("invisible");
			}, 3000);
		} else if (player_choice === "ciseaux") {
			player_ciseaux.classList.toggle("invisible");
			setTimeout(() => {
				player_ciseaux.classList.toggle("invisible");
			}, 3000);
		}

		if (computer_choice === "pierre") {
			computer_pierre.classList.toggle("invisible");
			setTimeout(() => {
				computer_pierre.classList.toggle("invisible");
			}, 3000);
		} else if (computer_choice === "papier") {
			computer_papier.classList.toggle("invisible");
			setTimeout(() => {
				computer_papier.classList.toggle("invisible");
			}, 3000);
		} else if (computer_choice === "ciseaux") {
			computer_ciseaux.classList.toggle("invisible");
			setTimeout(() => {
				computer_ciseaux.classList.toggle("invisible");
			}, 3000);
		}

		// logique de victoire
		const resultat = win_condition(player_choice, computer_choice);
		const score_resultat = score(compteur_player, compteur_ia);
	});
}

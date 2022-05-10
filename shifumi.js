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
		msg_winner.classList.toggle("invisible");

		// setTimeout(() => {
		// 	location.reload();
		// }, 1500);
		return "vous avez gagné";
	} else if (compteur_ia == manche_input.value) {
		msg_looser.classList.toggle("invisible");

		// setTimeout(() => {
		// 	location.reload();
		// }, 1500);

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
const retour_popup = document.querySelectorAll(".return_popup");

const player_score = document.querySelector("#score-player");
const computer_score = document.querySelector("#score-computer");

const msg_winner = document.querySelector("#winner");
const msg_looser = document.querySelector("#looser");

// get divs by id
const div_menu = document.getElementById("menu");
const div_jeu = document.getElementById("jeu");

const div_player = document.getElementById("player");
const div_computer = document.getElementById("computer");

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

for (const button of retour_popup) {
	button.addEventListener("click", (e) => {
		location.reload();
	});
}

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
		const player_image = document.createElement("img");
		const computer_image = document.createElement("img");

		player_image.src = `./images/${player_choice}.png`;
		computer_image.src = `./images/${computer_choice}.png`;

		div_player.innerHTML = "";
		div_computer.innerHTML = "";

		div_player.appendChild(player_image);
		div_computer.appendChild(computer_image);

		// logique de victoire
		win_condition(player_choice, computer_choice);
		score(compteur_player, compteur_ia);
		player_score.innerHTML = "Score : " + compteur_player;
		computer_score.innerHTML = "Score : " + compteur_ia;
	});
}

'use strict' // Définition du mode strict

const aboutButton = document.querySelector(".about"); // Appel d'un élément HTML avec le DOM (querySelector)
const title = document.querySelector(".title");

function redirectButton() {
    window.open('https://github.com/enioaiello/cadeau', '_blank');
}

aboutButton.addEventListener("click", redirectButton);
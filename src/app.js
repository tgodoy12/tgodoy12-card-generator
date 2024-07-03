/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palos = ["♠", "♥", "♣", "♦"];
let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];

let randomPalos = Math.floor(Math.random() * palos.length);
let randomCards = Math.floor(Math.random() * cards.length);

let paloElement = document.querySelectorAll(".palo");
let numberElement = document.querySelector("#number");

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  numberElement.textContent = cards[randomCards];

  paloElement.forEach(element => {
    let tipo = palos[randomPalos];
    if (tipo == "♥" || tipo == "♦") {
      element.style.color = "red";
    }
    element.textContent = palos[randomPalos];
  });
};

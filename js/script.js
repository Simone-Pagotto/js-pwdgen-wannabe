// INIZIALIZZAZIONE VARIABILI
var userName;
var userSurname;
var favouriteColor;
var randomNumber;

// ACQUISIZIONE VARIABILI
var userName = prompt("Welcome! What's your name?");
var userSurname = prompt("and what's your surname?");
var favouriteColor = prompt("In the end.. What's your favourite color?");
var randomNumber = Math.round((Math.random() * 99));

// OUTPUT
document.getElementById('password').innerHTML = userName + userSurname + favouriteColor + randomNumber;

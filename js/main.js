let divDolar = document.getElementById("divDolar");
let spanDolar = document.querySelectorAll(".spinner");
let Doficial = document.getElementById("oficial");
let Dblue =document.getElementById("blue");
let Dsolidario = document.getElementById("solidario");
let inputPesos = document.getElementById("pesos");
let inputDolares = document.getElementById("dolares");
let changeButton = document.getElementById("switch");
let mode = document.querySelector(".sol");
let body = document.querySelector(".light-body");
let header = document.querySelector(".light-header");
let main = document.querySelector(".light-main");
const dolaresUrl = "https://criptoya.com/api/dolar";

dolar();

changeButton.addEventListener("click", () => {
    body.classList.toggle("light-body");
    header.classList.toggle("light-header");
    changeButton.classList.toggle("switch-dark");
    mode.classList.toggle("sol");
    main.classList.toggle("light-main");
});



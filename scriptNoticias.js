const fechaescribir = document.getElementById("fecha");
let fecha = new Date();
let fechahoy = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
fechaescribir.innerText += fechahoy;




var x = window.matchMedia("(min-width: 1024px)")
const color5 = document.getElementById("contenedorprev1");
const color4 = document.getElementById("contenedorprev2");
const color3 = document.getElementById("contenedorprev3");
const color2 = document.getElementById("contenedorprev4");
const color1 = document.getElementById("contenedorprev5");
const color = document.getElementById("contenedorprev6");

color.addEventListener("mouseenter", function(event) {

    event.target.style.color = "purple";


    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
}, false);
color1.addEventListener("mouseenter", function(event) {

    event.target.style.color = "purple";


    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
}, false);
color2.addEventListener("mouseenter", function(event) {

    event.target.style.color = "purple";


    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
}, false);
color3.addEventListener("mouseenter", function(event) {

    event.target.style.color = "purple";


    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
}, false);
color4.addEventListener("mouseenter", function(event) {

    event.target.style.color = "purple";


    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
}, false);
color5.addEventListener("mouseenter", function(event) {

    event.target.style.color = "purple";


    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
}, false);

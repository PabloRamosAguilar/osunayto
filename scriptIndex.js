const pNode = document.getElementById("tituloAlcalde")

var alcaldesa = {
    nombre: "Nombre: Rosario",
    edad: "Edad : 50",
    correo: "Email:  dummyemail@dummymail.com"
};

const fechaescribir = document.getElementById("fecha");
pNode.innerText += "¡Saludos Ciudadanos!";
const nombre1 = document.getElementById("nombre");
const edad1 = document.getElementById("edad");
const correo1 = document.getElementById("correo");
nombre1.innerText += alcaldesa.nombre;
edad1.innerText += alcaldesa.edad;
correo1.innerText += alcaldesa.correo;

let links = document.querySelectorAll("#fotoA");
links.forEach(function(link) {

    link.setAttribute("src", "AlcaldesaOsuna.jpg");

});

/* Otra forma sería usar:
var img = document.createElement("img");
img.src = "AlcaldesaOsuna.jpg";
var src = document.getElementById("fotoAlcalde");
src.appendChild(img);*/

let fecha = new Date();

let fechahoy = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();

fechaescribir.innerText += fechahoy;

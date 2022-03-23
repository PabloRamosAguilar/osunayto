const fechaescribir = document.getElementById("fecha");

let fecha = new Date();

let fechahoy = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();

fechaescribir.innerText += fechahoy;

const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');
const oculto = document.getElementById("elementoOculto");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidTelefono = telefono => {
    const re = /^\+\d{2,3}\s\d{9}$/;
    return re.test(String(telefono).toLowerCase());
}

const validateInputs = () => {

    let Nombre = nombre.value.trim();
    let Email = email.value.trim();
    let Telefono = telefono.value.trim();
    let Message = mensaje.value.trim();
    let counter = 0;

    if (Nombre === "") {
        nombre.style.backgroundColor = "red";
    } else {
        counter++;
        nombre.style.backgroundColor = "green";
    }
    if (Email === "") {
        email.style.backgroundColor = "red";
    } else if (!isValidEmail(Email)) {
        email.style.backgroundColor = "red";
    } else {
        counter++;
        email.style.backgroundColor = "green";
    }
    if (Telefono === "") {

        telefono.style.backgroundColor = "red";
    } else if (!isValidTelefono(Telefono)) {
        telefono.style.backgroundColor = "red";
    } else {
        counter++;
        telefono.style.backgroundColor = "green";
    }
    if (Message === "") {

        mensaje.style.backgroundColor = "red";
    } else {
        counter++;
        mensaje.style.backgroundColor = "green";
    }
    if (counter === 4) {
        oculto.innerText = "Todos los campos son validos"
        oculto.style.visibility = "visible";
        oculto.style.backgroundColor = "green";
    } else {
        oculto.innerText = "Algún campo no es valido.";
        oculto.style.backgroundColor = "red";
        oculto.style.visibility = "visible";
    }

};

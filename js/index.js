document.addEventListener("DOMContentLoaded", function() {
const valor = document.getElementById("textBox");
const boton = document.getElementById("showColor");
const divColor = document.getElementById("color");

function cambiarColor(color) {
    divColor.style.backgroundColor = color;
};

boton.addEventListener("click", cambiarColor(valor.value));
});
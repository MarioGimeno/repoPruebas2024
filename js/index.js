document.addEventListener("DOMContentLoaded", function() {
    const valor = document.getElementById("textBox");
    const boton = document.getElementById("showColor");
    const divColor = document.getElementById("color");

    function cambiarColor() {
        divColor.style.backgroundColor = valor.value;
    }

    boton.addEventListener("click", cambiarColor);
});
document.addEventListener("DOMContentLoaded", function () {
    let boton = document.querySelector("button");
    let resultado = document.querySelector("p");

    boton.addEventListener("click", function () {
        let lado1 = parseFloat(document.getElementById("l1").value) || 0;
        let lado2 = parseFloat(document.getElementById("l2").value) || 0;
        let lado3 = parseFloat(document.getElementById("l3").value) || 0;

        if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
            resultado.textContent = "Por favor, ingrese valores válidos.";
            return;
        }

        if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
            if (lado1 === lado2 && lado2 === lado3) {
                resultado.textContent = "Es un triángulo equilátero.";
            } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
                resultado.textContent = "Es un triángulo isósceles.";
            } else {
                resultado.textContent = "Es un triángulo escaleno.";
            }
        } else {
            resultado.textContent = "Los valores no forman un triángulo válido.";
        }
    });
});

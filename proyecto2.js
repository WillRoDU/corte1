function calcularEdad() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("result");
    
    if (numero > 0 ) {
        resultado.innerText = "El Numero es positivo";
        resultado.style.color = "green";
    } else  {
        resultado.innerText = "El Numero es negativo";
        resultado.style.color = "red";
    }
        if (numero === "0") {
        resultado.innerText = "El numero es cero";
        resultado.style.color = "Blue";
        return
    }
}

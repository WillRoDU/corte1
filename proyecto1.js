function mostrarDatos() {
    const nombre =document.getElementById("nombre").value;
    const apellido =document.getElementById("apellido").value;
    const username =document.getElementById("username").value;
    const email =document.getElementById("email").value;
    const password =document.getElementById("password").value;

    alert(`Informacion Ingresada:\n
        Nombre: ${nombre}\n
        Apellido: ${apellido}\n
        Nombre De Usuario: ${username}\n
        Correo Electronico: ${email}\n
        Contraseña: ${password}`);
}

function cambiarModoColor(){
    document.body.classList.toggle("dark-mode");
}
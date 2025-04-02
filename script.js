document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const usuario = document.getElementById('username').value;
    const clave = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
  
    // Usuario y clave hardcodeados (sólo para demo)
    if (usuario === 'admin' && clave === '1234') {
      window.location.href = 'dashboard.html'; // Redirige a otra página si quieres
    } else {
      errorMsg.textContent = 'Credenciales incorrectas 😩';
    }
  });
  
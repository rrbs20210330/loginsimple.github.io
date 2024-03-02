function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validación de usuario y contraseña
    if (username === 'roberto' && password === 'patito') {
      alert('¡Inicio de sesión exitoso!');
      // Aquí puedes redirigir a otra página o realizar otras acciones después de iniciar sesión
    } else {
      alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
  }
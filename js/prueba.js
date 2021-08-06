fetch("php/conectarUsuario.php")
    .then(data => data.text())
    .then(text => console.log(text));
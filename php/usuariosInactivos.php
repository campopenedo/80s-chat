<?php
include "../../chat-cred/cred.php";
  
$con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

$usuariosInactivos = $con->query('SELECT * FROM `usuariosConectados` WHERE `conectadoDesde` + `segundosActivo` < ('. time() . ' - 2);');

while($row = mysqli_fetch_array($usuariosInactivos)){
    $usuarioDesconectado = $con->query('DELETE FROM usuariosConectados WHERE usuario = "'. $row["usuario"] .'";');


    $usuario = "Servidor-desconectado";
    $mensaje = "El usuario ". $row['usuario'] ." se ha desconectado";
    $date = date("h:i:sa");

    $avisoDesconexion = $con->prepare('INSERT INTO ciberchat(usuario, mensaje, hora) VALUES(? , ?, ?);');
    $avisoDesconexion->bind_param('sss', $usuario, $mensaje, $date);
    $avisoDesconexion->execute();
    $avisoDesconexion->close();
}
?>
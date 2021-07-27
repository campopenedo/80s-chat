<?php
  include "../../chat-cred/cred.php";
  
  $con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

  $nombre = $_POST["nombre"];
  if(preg_match("/^[a-zA-Z0-9 ]{1,30}$/", $nombre) == 0) {

  }else{
    $usuarioDesconectado = $con->prepare('DELETE FROM usuariosConectados WHERE usuario = ?;');
    $usuarioDesconectado->bind_param('s', $nombre);
    $usuarioDesconectado->execute();
    $usuarioDesconectado->close();

    $usuario = "Servidor-desconectado";
    $mensaje = "El usuario $nombre se ha desconectado";
    $date = date("h:i:sa");

    $avisoDesconexion = $con->prepare('INSERT INTO ciberchat(usuario, mensaje, hora) VALUES(? , ?, ?);');
    $avisoDesconexion->bind_param('sss', $usuario, $mensaje, $date);
    $avisoDesconexion->execute();
    $avisoDesconexion->close();
  }

 ?>

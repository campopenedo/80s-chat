<?php
  include "../../chat-cred/cred.php";
  $con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

  $mensaje = file_get_contents("php://input");

  $mensajeArray = json_decode($mensaje, true);

  $usuarioMensaje = $mensajeArray["usuario"];

  $textoMensaje = preg_replace( "/\r|\n/", "", nl2br(htmlspecialchars($mensajeArray["mensaje"])));

  $date = date("h:i:sa");
  if(preg_match("/^[a-zA-Z0-9 ]{1,30}$/", $usuarioMensaje) == 0) {

  }else{
    $guardarMensaje = $con->prepare('INSERT INTO ciberchat(usuario, mensaje, hora) VALUES(?, ?, ?)');
    $guardarMensaje->bind_param('sss', htmlspecialchars($usuarioMensaje), $textoMensaje, $date);
    $guardarMensaje->execute();
    $guardarMensaje->close();
  }

?>
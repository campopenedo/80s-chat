<?php
include "../../chat-cred/cred.php";
$nombre = $_POST["nombre"];
if(preg_match("/^[a-zA-Z0-9 ]{1,30}$/", $nombre) == 0) {

}else{
  $con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

  $nombre = $_POST["nombre"];

  $stmt = $con->prepare('INSERT INTO usuariosConectados(usuario) VALUES(?);');
  $stmt->bind_param('s', $nombre);
  $stmt->execute();
  $stmt->close();

  $usuario = "Servidor-conectado";
  $mensaje = "El usuario $nombre se ha conectado";
  $hora = date("h:i:sa");

  $msgServidor = $con->prepare('INSERT INTO ciberchat(usuario, mensaje, hora) VALUES(?, ?, ?)');

  $msgServidor->bind_param('sss', $usuario, $mensaje, $hora);
  $msgServidor->execute();
  $msgServidor->close();
}
 ?>

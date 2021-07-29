<?php
include "../../chat-cred/cred.php";
$nombre = $_POST["nombre"];
if(preg_match("/^[a-zA-Z0-9 ]{1,30}$/", $nombre) == 0) {

}else{
  $con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

  $nombre = $_POST["nombre"];
  $conectadoDesde = time();
  $segundosActivo = 0;
  $online = 1;


  $stmt = $con->prepare('INSERT INTO usuariosConectados(usuario, conectadoDesde, SegundosActivo, usuarioOnline) VALUES(?,?,?,?);');
  $stmt->bind_param('siii', $nombre, $conectadoDesde, $segundosActivo, $online);
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

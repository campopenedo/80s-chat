<?php
include "../../chat-cred/cred.php";

$nombre = $_POST["nombre"];
  
$con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

$usuarioActivo = $con->prepare('UPDATE `usuariosConectados` SET `ultimaActividad` = ' . time() . ' WHERE usuario = ?');
$usuarioActivo->bind_param('s', $nombre);
$usuarioActivo->execute();

$usuarioActivo->close();

?>
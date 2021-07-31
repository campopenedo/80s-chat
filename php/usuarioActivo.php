<?php
include "../../chat-cred/cred.php";
session_start();
  
$con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

$usuarioActivo = $con->prepare('UPDATE `usuariosConectados` SET `ultimaActividad` = ' . time() . ' WHERE usuario = ?');
$usuarioActivo->bind_param('s', $_SESSION["nombre"]);
$usuarioActivo->execute();

$usuarioActivo->close();

?>
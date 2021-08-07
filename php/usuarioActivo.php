<?php
include "../../chat-cred/cred.php";
session_start();
  
$con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

$usuarioActivo = $con->prepare('UPDATE `usuariosConectados` SET `ultimaActividad` = ' . time() . ' WHERE usuario = ?');
$usuarioActivo->bind_param('s', $_SESSION["nombre"]);
$usuarioActivo->execute();
$usuarioActivo->close();

$activoONo = $con->prepare('SELECT COUNT(usuario) FROM `usuariosConectados` WHERE usuario = ?');
$activoONo->bind_param('s', $_SESSION["nombre"]);
$activoONo->execute();

$result = $activoONo->get_result();

while($row = $result->fetch_array(MYSQLI_NUM)) {
    if($row[0] === 0) {
        $_SESSION["nombre"] = "";
    }
    echo "sesion:" . $_SESSION["nombre"];
}




$activoONo->close();

?>
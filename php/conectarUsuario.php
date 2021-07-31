<?php
include "../../chat-cred/cred.php";
session_start();
$nombre = $_POST["nombre"];
if(preg_match("/^[a-zA-Z0-9 ]{1,30}$/", $nombre) == 0) {

}else{
  $con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

  $consultaUsuario = $con->query('SELECT * FROM usuariosConectados WHERE usuario ="'. $nombre .'";');

  if(mysqli_num_rows($consultaUsuario) > 0){
    echo "Denegado";
  } else {
    $_SESSION["nombre"] = $nombre;
    $conectadoDesde = time();
    $ultimaActividad = time();
    $online = 1;
  
  
    $stmt = $con->prepare('INSERT INTO usuariosConectados(usuario, conectadoDesde, ultimaActividad, usuarioOnline) VALUES(?,?,?,?);');
    $stmt->bind_param('siii', $_SESSION["nombre"], $conectadoDesde, $ultimaActividad, $online);
    $stmt->execute();
    $stmt->close();
  
    $usuario = "Servidor-conectado";
    $mensaje = "El usuario " . $_SESSION["nombre"] . " se ha conectado";
    $hora = date("h:i:sa");
  
    $msgServidor = $con->prepare('INSERT INTO ciberchat(usuario, mensaje, hora) VALUES(?, ?, ?)');
  
    $msgServidor->bind_param('sss', $usuario, $mensaje, $hora);
    $msgServidor->execute();
    $msgServidor->close();
  }

}
 ?>

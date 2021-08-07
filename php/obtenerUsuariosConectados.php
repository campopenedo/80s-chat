<?php
  include "../../chat-cred/cred.php";
  session_start();
  $con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

  $usuarios = $con->query('SELECT * FROM usuariosConectados');

  $usuario = $usuarios->fetch_object();

  $contador = 1;

  echo '{';
  while($usuario != null) {
    echo '"' .  $contador . '": {';
    echo '"usuario": "' . $usuario->usuario . '"';
    if(mysqli_num_rows($usuarios) == $contador){
        echo '}';
    }
    if(mysqli_num_rows($usuarios) != $contador){
        echo '},';
    }
    $contador++;
    $usuario = $usuarios->fetch_object();
  }
  echo '}';
 ?>

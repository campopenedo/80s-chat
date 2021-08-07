<?php
  include "../../chat-cred/cred.php";
  session_start();
  $con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

  $mensajesDesde = $_POST['id'];

  $mensajesNuevos = $con->prepare('SELECT numeroMensaje, usuario, mensaje, hora FROM ciberchat WHERE numeroMensaje > ?');
  $mensajesNuevos->bind_param('s', $mensajesDesde);
  $mensajesNuevos->execute();

  $mensajesNuevos->store_result();
  $num_rows = $mensajesNuevos->num_rows;
  $mensajesNuevos->bind_result($numeroMensaje, $usuario, $mensaje, $hora);

  $contador = 1;

  echo '{ "mensajes": {';

  while($mensajesNuevos->fetch()){
      echo '"' .  $contador . '": {';
      echo '"usuario": "' . $usuario . '",';
      echo '"mensaje": "' . $mensaje . '",';
      echo '"hora": "' . $hora . '",';
      echo '"numero": "' . $numeroMensaje . '"';

      if($num_rows == $contador){
          echo '}';
      }
      if($num_rows != $contador){
          echo '},';
      }
      $contador++;

  }
  echo '}}';

  $mensajesNuevos->free_result();
  $mensajesNuevos->close();


?>

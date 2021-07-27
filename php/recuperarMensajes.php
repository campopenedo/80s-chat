<?php
include "../../chat-cred/cred.php";
$con = new mysqli($host, $nombreUsuario, $contrasenhaUsuario, $nombreBBDD);

$mensajes = $con->query("SELECT numeroMensaje, usuario, mensaje, hora FROM ciberchat");
$mensaje = $mensajes->fetch_object();
$contador = 1;
$numeroMensajes = $mensajes->num_rows;

echo '{"mensajes": {';
while($mensaje != null){
    echo '"' .  $contador . '": {';
    echo '"usuario": "' . $mensaje->usuario . '",';
    echo '"mensaje": "' . $mensaje->mensaje . '",';
    echo '"hora": "' . $mensaje->hora . '",';
    echo '"numero": "' . $mensaje->numeroMensaje . '"';
    if(mysqli_num_rows($mensajes) == $contador){
        echo '}';
    }
    if(mysqli_num_rows($mensajes) != $contador){
        echo '},';
    }
    $contador++;
    $mensaje = $mensajes->fetch_object();
}
echo '}}';

?>

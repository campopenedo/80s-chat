<?php

$nombreBBDD = $_POST["bbdd"];
$nombreUsuario = $_POST["usuario-bbdd"];
$contrasenhaUsuario = $_POST["contrasenha-bbdd"];
$borrarArchivos = $_POST["borrar-archivos"];
$host = $_SERVER['SERVER_NAME'];

$pattern = "/^[a-zA-Z0-9]{1,30}$/";
if(preg_match($pattern, $nombreBBDD) && preg_match($pattern, $nombreUsuario) && $contrasenhaUsuario){
  $con = new mysqli("$host" ,"$nombreUsuario", "$contrasenhaUsuario");

  if($con->connect_error) {
    die("Conexión fallida.");
  }

  $con->query("CREATE DATABASE $nombreBBDD");

  $con->query("CREATE TABLE $nombreBBDD.`ciberchat` ( `numeroMensaje` INT(11) NOT NULL AUTO_INCREMENT ,
  `usuario` VARCHAR(30) NOT NULL DEFAULT 'Desconocid@' ,
  `mensaje` VARCHAR(300) NOT NULL , `hora` VARCHAR(30) NOT NULL ,
  PRIMARY KEY (`numeroMensaje`))");

  $con->query("CREATE TABLE $nombreBBDD.`usuariosConectados` ( `usuario` VARCHAR(30) NOT NULL ); ");

  $credenciales = fopen("cred.php", "w");
  echo fwrite($credenciales, "<?php  \$host = '$host';  \$nombreUsuario = '$nombreUsuario'; \$contrasenhaUsuario = '$contrasenhaUsuario';  \$nombreBBDD = '$nombreBBDD'; ?>");
  fclose($credenciales);
  if(file_exists("cred.php")){
    echo "Success";
  } else {

  }
}
 ?>

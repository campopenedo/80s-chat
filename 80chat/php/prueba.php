<?php
$credenciales = fopen("cred.php", "w+");
fwrite($credenciales, "<?php  \$host = '$host';  \$nombreUsuario = '$nombreUsuario'; \$contrasenhaUsuario = '$contrasenhaUsuario';  \$nombreBBDD = '$nombreBBDD'; ?>");
echo "Success !";
 ?>

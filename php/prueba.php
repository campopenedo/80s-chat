<?php
echo 'SELECT * FROM `usuariosConectados` WHERE `conectadoDesde` + `segundosActivo` < ('. time() . ' + 5);';
?>
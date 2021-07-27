CREATE DATABASE ciberchat;

CREATE TABLE $nombreBBDD.`ciberchat` ( `numeroMensaje` INT(11) NOT NULL AUTO_INCREMENT ,
  `usuario` VARCHAR(30) NOT NULL DEFAULT 'Desconocid@' ,
  `mensaje` VARCHAR(300) NOT NULL , `hora` VARCHAR(30) NOT NULL ,
  PRIMARY KEY (`numeroMensaje`));

CREATE TABLE $nombreBBDD.`usuariosConectados` ( `usuario` VARCHAR(30) NOT NULL );

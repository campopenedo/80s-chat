CREATE DATABASE ciberchat;

CREATE TABLE ciberchat.`ciberchat` ( `numeroMensaje` INT(11) NOT NULL AUTO_INCREMENT ,
  `usuario` VARCHAR(30) NOT NULL DEFAULT 'Desconocid@' ,
  `mensaje` VARCHAR(300) NOT NULL , `hora` VARCHAR(30) NOT NULL ,
  PRIMARY KEY (`numeroMensaje`));

CREATE TABLE ciberchat.`usuariosConectados` ( `usuario` VARCHAR(30) NOT NULL );

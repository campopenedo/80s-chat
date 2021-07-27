CREATE DATABASE ciberChat;
CREATE TABLE ciberChat.`ciberchat` ( `numeroMensaje` INT(11) NOT NULL AUTO_INCREMENT ,
  `usuario` VARCHAR(30) NOT NULL DEFAULT 'Unknow' ,
  `mensaje` VARCHAR(300) NOT NULL , `hora` VARCHAR(30) NOT NULL ,
  PRIMARY KEY (`numeroMensaje`));
  CREATE TABLE $nombreBBDD.`usuariosConectados` ( `usuario` VARCHAR(30) NOT NULL );
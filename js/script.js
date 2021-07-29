import mensajesAntiguos from "./mensajesAntiguos.js";
import enviarMensaje from "./enviarMensaje.js";
import recargarChat from "./recargarChat.js";
import elegirUsuario from "./elegirUsuario.js";
import desconectarUsuario from "./desconectarUsuario.js";
import listaUsuarios from "./listaUsuarios.js";
import notificacionesMensajes from "./notificacionesMensajes.js";
import * as cambiarVista from "./cambiar-vista-mobil.js";
import usuarioActivo from "./usuarioActivo.js";
import usuariosInactivos from "./usuariosInactivos.js";

notificacionesMensajes
window.addEventListener("DOMContentLoaded", async function iniciarChat(){
    await usuariosInactivos();
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "php/recuperarMensajes.php");
    xhr.send();
    xhr.addEventListener("load", (e)=> {
      mensajesAntiguos(e);
      enviarMensaje();
      elegirUsuario();
      desconectarUsuario();
      listaUsuarios();
      notificacionesMensajes();
      document.getElementById("mensajes").scrollTop = document.getElementById("mensajes").scrollHeight;
    });
    document.getElementById("switch-vista").innerHTML = "Ver usuarios";
});
setInterval(()=>{
  usuariosInactivos();
  usuarioActivo();
  recargarChat();
}, 1000);
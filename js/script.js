import mensajesAntiguos from "./mensajesAntiguos.js";
import enviarMensaje from "./enviarMensaje.js";
import recargarChat from "./recargarChat.js";
import elegirUsuario from "./elegirUsuario.js";
import desconectarUsuario from "./desconectarUsuario.js";
import listaUsuarios from "./listaUsuarios.js";
import notificacionesMensajes from "./notificacionesMensajes.js";

notificacionesMensajes
window.addEventListener("DOMContentLoaded", ()=>{
  document.body.style.display='block';
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
});
document.addEventListener("submit", (e)=>{
  console.log("prueba");
})
setInterval(()=>{
  recargarChat();
}, 1000);

console.log(window.location.pathname);
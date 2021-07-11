export default function notificacionesMensajes() {
  let cambioTitulo;
  document.addEventListener("visibilitychange", (e) =>{
    console.log(document.visibilityState);
    if(document.visibilityState === "hidden") {
      let mensajesUsuario = document.getElementById("mensajes").querySelectorAll(".usuario-mensaje"),
      numeroMayor = mensajesUsuario[mensajesUsuario.length - 1].id;
      cambioTitulo =  setInterval(() => {
        let nuevosMensajes = document.getElementById("mensajes").querySelectorAll(".usuario-mensaje").length - (mensajesUsuario.length);
        if(nuevosMensajes > 0){
          document.title = `(${nuevosMensajes})  Chat`;
        }
      }, 1000)
    } else if (document.visibilityState === "visible") {
      document.title = `Chat`;
      clearInterval(cambioTitulo);
    }
  })
}

import listaUsuarios from "./listaUsuarios.js";
export default async function recargarChat() {
  let mensajes = document.getElementById("mensajes").children,
  numeroMayor = `${mensajes.length > 0 ? mensajes[mensajes.length -1].id : 0}`,
  xhr = new XMLHttpRequest(),
  $fragment;
  xhr.open("POST", "php/recuperarMensajesNuevos.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(`id=${numeroMayor}`);
  xhr.addEventListener("readystatechange",async function (e) {
    if(e.target.readyState === 4 && e.target.status === 200){
      let mensajesJSON = JSON.parse(e.target.response);
      let prueba = await setTimeout(await function () {
        if(mensajesJSON["mensajes"][1] && document.getElementById("mensajes").lastChild){
          if(mensajesJSON["mensajes"][1]["numero"] === document.getElementById("mensajes").lastChild.id){return false};
        }
      }, 1000)
      if(Object.keys(mensajesJSON["mensajes"]).length > 0 && mensajesJSON["mensajes"][1]["numero"] !== document.getElementById("mensajes").lastChild.id){

        $fragment = document.createDocumentFragment();
        for(let x = 1; x <= Object.keys(mensajesJSON["mensajes"]).length; x++){
            let $mensajeEnChat = document.createElement("section"),
            $hora = document.createElement("span"),
            $separador = document.createElement("div"),
            $mensaje = document.createElement("span"),
            $usuario = document.createElement("span");
            if(mensajesJSON["mensajes"][x]["usuario"] === "Servidor-desconectado" || mensajesJSON["mensajes"][x]["usuario"] === "Servidor-conectado"){
              $mensajeEnChat.classList.add("servidor");
              if(mensajesJSON["mensajes"][x]["usuario"] === "Servidor-desconectado"){
                listaUsuarios();
              }
            } else {
              $mensajeEnChat.classList.add("usuario-mensaje");
            }

            $hora.classList.add("hora");
            $separador.classList.add("separador"),
            $usuario.classList.add("usuario");
            $mensaje.classList.add("mensaje");
            $mensajeEnChat.setAttribute("id", mensajesJSON["mensajes"][x]["numero"]);

            $hora.innerHTML = mensajesJSON["mensajes"][x]["hora"];
            $usuario.innerHTML = mensajesJSON["mensajes"][x]["usuario"] + ": ";
            $mensaje.innerHTML = mensajesJSON["mensajes"][x]["mensaje"];

            $mensajeEnChat.appendChild($usuario);
            $mensajeEnChat.appendChild($mensaje);
            $mensajeEnChat.appendChild($separador);
            $mensajeEnChat.appendChild($hora);

            $fragment.appendChild($mensajeEnChat);
            if(mensajesJSON["mensajes"][x]["usuario"] === "Servidor-conectado"){
              listaUsuarios();
            }
        };
        if(document.getElementById("mensajes").scrollHeight - document.getElementById("mensajes").scrollTop === document.getElementById("mensajes").clientHeight){
          document.getElementById("mensajes").appendChild($fragment);
          document.getElementById("mensajes").scrollTop = document.getElementById("mensajes").scrollHeight;
        } else {
          document.getElementById("mensajes").appendChild($fragment);
        }

      }
    };
  })
}

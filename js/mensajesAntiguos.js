import usuarioActivo from "./usuarioActivo.js";
export default function mensajesAntiguos(e){
    let mensajesJson = JSON.parse(e.target.response),
    $fragment = document.createDocumentFragment();
    for(let x = 1; x <= Object.keys(mensajesJson["mensajes"]).length; x++){
        let $mensajeEnChat = document.createElement("section"),
        $hora = document.createElement("span"),
        $mensaje = document.createElement("span"),
        $usuario = document.createElement("span"),
        $separador = document.createElement("div");

        if(mensajesJson["mensajes"][x]["usuario"] === "Servidor-desconectado" || mensajesJson["mensajes"][x]["usuario"] === "Servidor-conectado") {
          $mensajeEnChat.classList.add("servidor");
        } else {
          $mensajeEnChat.classList.add("usuario-mensaje");
        }

        $hora.classList.add("hora");
        $usuario.classList.add("usuario");
        $mensaje.classList.add("mensaje");
        $separador.classList.add("separador");
        $mensajeEnChat.setAttribute("id", mensajesJson["mensajes"][x]["numero"]);

        $hora.innerHTML = mensajesJson["mensajes"][x]["hora"];
        $usuario.innerHTML = mensajesJson["mensajes"][x]["usuario"] + ": ";
        $mensaje.innerHTML = mensajesJson["mensajes"][x]["mensaje"];

        $mensajeEnChat.appendChild($usuario);
        $mensajeEnChat.appendChild($mensaje);
        $mensajeEnChat.appendChild($separador);
        $mensajeEnChat.appendChild($hora);

        $fragment.appendChild($mensajeEnChat);
    };
    document.getElementById("mensajes").appendChild($fragment);
}

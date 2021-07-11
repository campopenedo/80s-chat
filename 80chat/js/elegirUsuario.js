import conectarUsuario from "./conectarUsuario.js";
export default function elegirUsuario() {
  let form = document.createElement("form"),
  botonEnviar = document.createElement("input");

  form.setAttribute("id","formulario-interaccion");

  botonEnviar.setAttribute("type","submit");
  botonEnviar.setAttribute("id","enviar");
  botonEnviar.setAttribute("name","enviar");
  botonEnviar.setAttribute("value","Submit");


  if(!sessionStorage.getItem("usuarioChat")){
    let introducirNombre = document.createElement("fieldset"),
    etiquetaNombre = document.createElement("label"),
    nombre = document.createElement("input");

    nombre.setAttribute("type", "text");
    nombre.setAttribute("id", "nombre-usuario");
    nombre.setAttribute("pattern", "^[a-zA-Z0-9 ]{1,30}$");


    etiquetaNombre.innerHTML = "Introduce un nick: ";
    etiquetaNombre.appendChild(nombre);
    etiquetaNombre.innerHTML += " para chatear";

    introducirNombre.classList.add("introducir-nombre");
    introducirNombre.appendChild(etiquetaNombre);

    form.appendChild(botonEnviar);
    document.getElementById("zona-interaccion").appendChild(form);
    document.getElementById("formulario-interaccion").insertBefore(introducirNombre, document.getElementById("enviar"));

    document.addEventListener("click", (e)=> {
      if(e.target.id === "enviar" && document.getElementById("nombre-usuario") !== null){
        if(document.getElementById("nombre-usuario").value.length > 0){
          let patt = new RegExp("^[a-zA-Z0-9 ]{1,30}$");
          if(!patt.test(document.getElementById("nombre-usuario").value)){
            document.getElementById("nombre-usuario").value = "";
            document.getElementById("nombre-usuario").placeholder = "Solo letras, números y espacios";
          } else {
            sessionStorage.setItem("usuarioChat", document.getElementById("nombre-usuario").value);
            conectarUsuario();
            elegirUsuario();
          }
        }
      }
    })
  }
  if(sessionStorage.getItem("usuarioChat")){
    let mensaje = document.createElement("textarea");

    mensaje.setAttribute("id","mensaje");
    mensaje.setAttribute("spellcheck","false");

    if(document.getElementsByClassName("introducir-nombre")[0]){
    document.getElementsByClassName("introducir-nombre")[0].remove();
  } else{
    form.appendChild(botonEnviar);
    document.getElementById("zona-interaccion").appendChild(form);
  }

    document.getElementById("formulario-interaccion").insertBefore(mensaje, document.getElementById("enviar"));
  }
}

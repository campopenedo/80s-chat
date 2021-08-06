
import recargarChat from "./recargarChat.js";
let d = document;
export default function enviarMensaje(){
    if(d.getElementById("mensaje") !== null){
      if(d.getElementById("mensaje").value.length > 0) {
        let mensaje = d.getElementById("mensaje").value,
        data = new Date(),
        hora = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;

        let mensajeJSON = {
          "usuario" : sessionStorage.getItem("usuarioChat"),
          "mensaje" : mensaje,
          "hora" : hora
        };

        let mensajeJSONstring = JSON.stringify(mensajeJSON);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "php/guardarMensaje.php", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(mensajeJSONstring);
        xhr.addEventListener("load", async () => {
          document.getElementById("mensaje").value = "";
        });
        
      }
    }
}
d.addEventListener("click", e => {
  if(e.target.id === "enviar") {
    e.preventDefault();
    enviarMensaje();
  }
});
d.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    enviarMensaje();
  }
})

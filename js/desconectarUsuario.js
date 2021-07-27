export default function desconectarUsuario() {
  window.addEventListener("beforeunload", ()=>{
    if(sessionStorage.getItem("usuarioChat") !== null){
      let formData = new FormData();
      formData.append('nombre', `${sessionStorage.getItem("usuarioChat")}`);

      const respuesta = fetch("php/desconectarUsuario.php", {
        method: "POST",
        body : formData
      })
    }
  })
}

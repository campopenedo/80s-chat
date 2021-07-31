import elegirUsuario from "./elegirUsuario.js";
export default async function conectarUsuario(){
  try{
    let formData = new FormData();
    formData.append('nombre', `${sessionStorage.getItem("usuarioChat")}`);
    const settings = {
      method: "POST",
      body: formData
    };
    const respuesta = await fetch("php/conectarUsuario.php", settings)
      .then(data => data.text())
      .then(text => {
        if(text === "Denegado") {
          document.getElementById("nombre-usuario").value = "";
          document.getElementById("nombre-usuario").placeholder = "Nick en uso.";
        } else {
          console.log(text);
          elegirUsuario();
        }
      });
    
  } catch(err) {
    console.log(err);
  }

}

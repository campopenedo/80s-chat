export default async function conectarUsuario(){
  try{
    let formData = new FormData();
    formData.append('nombre', `${sessionStorage.getItem("usuarioChat")}`);
    const settings = {
      method: "POST",
      body: formData
    };
    const respuesta = await fetch("/80chat/php/conectarUsuario.php", settings);
    if(!respuesta.ok) throw new Error;
  } catch(err) {
    console.log(err);
  }

}

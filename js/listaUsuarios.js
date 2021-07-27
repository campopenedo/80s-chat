export default async function listaUsuarios(){
  const respuesta = await fetch("php/obtenerUsuariosConectados.php");

  respuesta.json()
  .then((datos) => {
    let $fragment = document.createDocumentFragment();

    let clavesDatos = Object.keys(datos);
    for(let x = 0; x < clavesDatos.length; x++){
      let $usuario = document.createElement("li");
      $usuario.innerHTML = datos[`${clavesDatos[x]}`]["usuario"];
      $fragment.appendChild($usuario);
    }
    document.getElementById("usuarios").querySelector("ul").innerHTML = "";
    document.getElementById("usuarios").querySelector("ul").appendChild($fragment);

  });

}

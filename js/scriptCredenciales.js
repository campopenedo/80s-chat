document.getElementById("bbdd").style.display = "block";
document.getElementById("usuario-bbdd").style.display = "block";
document.getElementById("contrasenha-bbdd").style.display = "block";
document.getElementById("borrar-archivos").style.display = "block";
document.querySelector("input[type=submit]").style.display = "block";
let regExp = new RegExp("^[a-zA-Z0-9]{1,30}$");

document.addEventListener("submit", e => {
  e.preventDefault();
  let contador = 0;
  e.target.querySelectorAll("input[type=text]").forEach((item) => {
    if(!regExp.test(item.value) && e.target.id !== "contrasenha-bbdd"){
      item.nextElementSibling.innerHTML = "Sólo letras sin tildes y números.";
      contador++;
    }
  });
  if(contador === 0){
    let formData = new FormData(e.target);
    fetch("/80chat/php/crearCredenciales.php",{
      method: "POST",
      body: formData
    })
      .then(resp => resp.text())
      .then(data => {
        aviso = document.createElement("p");
        if(data === "Success") {
          document.getElementById("advertencia-contrasenha-bbdd").innerHTML = "Chat creado con éxito.";

        } else {
          document.getElementById("advertencia-contrasenha-bbdd").innerHTML = "Ha ocurrido un error. Pruebe: <br>-Que las credenciales sean correctas.<br>-Que tenga permisos de escritura en la BBDD y de ficheros.";
          document.querySelector("fieldset").insertBefore(document.getElementById("contrasenha-bbdd"), aviso);
        }
      }
      );
  }

});

document.addEventListener("keyup", e=>{
  if(e.target.localName === "input" && e.target.id !== "contrasenha-bbdd"){
    if(!regExp.test(e.target.value)){
      e.target.nextElementSibling.innerHTML = `${e.target.value.length === 0 ? "" : "Sólo letras sin tildes y números."}`;
    }else if( e.target.value.length > 30){
      e.target.nextElementSibling.innerHTML = "Máximo 30 carácteres.";
      e.target.value = e.target.value.slice(0,30);
    } else if(regExp.test(e.target.value)){
      e.target.nextElementSibling.innerHTML = "";
    }
  }
});

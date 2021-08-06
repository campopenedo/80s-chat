export default function usuarioActivo() {
    let nombreUsuario = new FormData();
    nombreUsuario.append("nombre", sessionStorage.usuarioChat);
    
    let usuarioActivo = fetch("php/usuarioActivo.php", {
        method: "POST",
        body: nombreUsuario
    })
}
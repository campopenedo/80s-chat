document.addEventListener("click", e => {
    if(e.target.id === "switch-vista"){
        if(e.target.innerHTML === "Ver usuarios") {
            document.getElementById("mensajes").style.display = "none";
            document.getElementById("usuarios").style.display = "block";
        }
        if(e.target.innerHTML === "Ver chat") {
            document.getElementById("mensajes").style.display = "block";
            document.getElementById("usuarios").style.display = "none";
        }
        e.target.innerHTML = `${e.target.innerHTML === "Ver usuarios" ? "Ver chat" : "Ver usuarios"}`;
    }
});

window.addEventListener("resize", e => {
    if(e.target.innerWidth > 690){
        document.getElementById("mensajes").style.display = "inline-block";
        document.getElementById("usuarios").style.display = "inline-block";
    }

    if(e.target.innerWidth < 690 && document.getElementById("mensajes").style.display === "inline-block" && document.getElementById("usuarios").style.display === "inline-block"){
        document.getElementById("mensajes").style.display = "inline-block";
        document.getElementById("usuarios").style.display = "none";
        document.getElementById("switch-vista").innerHTML = "Ver usuarios";
    }
})
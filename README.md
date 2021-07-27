# 80s-chat
A web chat project with retro thematic.

### How can i use it on my web
1. Create the database <a href="https://github.com/campopenedo/80s-chat/blob/main/instalation/create-database.sql">with this SQL sentences</a>
2. Use <a href="https://github.com/campopenedo/80s-chat/instalation/cred.php">this template</a> for credentials, and remove it from the public webroot. For example:

    -If your URL is example.com/public/80s-chat, put the cred.php on example.com/chat-cred/cred.php and it works by default.
  
    -If you want to change the path for cred.php, you need to modify the the next lines:
    
    1.  conectarUsuario.php: line 2
    2.  desconectarUsuario.php: line 2
    3.  guardarMensaje.php: line 2
    4.  obtenerUsuariosConectados.php: line 2
    5.  recuperarMensajes.php: line 2
    6.  recuperarMensajesNuevos.php: line 2

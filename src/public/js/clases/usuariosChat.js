export class UsuariosChat {
  constructor(nombreUsuario, mensajes, fotoPerfil40, fotoPerfil400) {
    this.nombreUsuario = nombreUsuario;
    this.mensajes = mensajes;
    this.fotoPerfil40 = fotoPerfil40;
    this.fotoPerfil400 = fotoPerfil400;

    this.divUserOnline = document.createElement("div");
    this.divUserOnline.classList.add("user-online");

    this.containerAvatar = document.createElement("div");
    this.containerAvatar.classList.add("avatar");

    this.imagenAvatar = document.createElement("img");
    this.imagenAvatar.src = this.fotoPerfil40;

    this.containerTexto = document.createElement("div");
    this.containerTexto.classList.add("user-texto");

    this.informacionUsuario = document.createElement("div");
    this.informacionUsuario.classList.add("user-info");

    this.spanNombreUsuario = document.createElement("span");
    this.spanNombreUsuario.classList.add("nombre-user");
    this.spanNombreUsuario.textContent = this.nombreUsuario;

    this.spanFechaUltimoMensaje = document.createElement("span");
    this.spanFechaUltimoMensaje.classList.add("fecha-mensaje");
    this.spanFechaUltimoMensaje.textContent = "Lunes";

    this.divMensajeUsuario = document.createElement("div");
    this.divMensajeUsuario.classList.add("user-mensaje");
    this.divMensajeUsuario.textContent = "Hola! ¿Cómo estás? Tanto tiempo!😀😃😄😃😆";

    this.divUserOnline.append(this.containerAvatar);
    this.containerAvatar.append(this.imagenAvatar);

    this.divUserOnline.append(this.containerTexto);
    this.containerTexto.append(this.informacionUsuario);

    this.informacionUsuario.append(this.spanNombreUsuario);
    this.informacionUsuario.append(this.spanFechaUltimoMensaje);

    this.containerTexto.append(this.divMensajeUsuario);
  }
}

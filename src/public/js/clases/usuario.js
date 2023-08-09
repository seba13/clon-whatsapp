export class Usuario {
  constructor(nombre = "", avatarUrl = "", idUsuario = "", estado = "") {
    this.nombre = nombre;
    this.avatarUrl = avatarUrl;
    this.idUsuario = idUsuario;
    this.estado = estado;
  }
}

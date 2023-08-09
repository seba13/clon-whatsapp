// contenedor de lista de usaurios del sidebar

export class ContainerUsuarios {
  constructor() {
    this.divContainerUsuariosOnline = document.createElement("div");
    this.divContainerUsuariosOnline.classList.add("container-users-online");

    this.usuariosOnline = document.createElement("div");
    this.usuariosOnline.classList.add("users-online");

    this.divContainerUsuariosOnline.append(this.usuariosOnline);
  }

  agregarUsuario(componenteUsuarioChat) {
    this.usuariosOnline.append(componenteUsuarioChat);
  }
}

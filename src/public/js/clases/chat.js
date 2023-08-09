import { Usuario } from "./usuario.js";
import { Header } from "./header.js";
import { Buscar } from "./buscar.js";
import { ContainerUsuarios } from "./containerUsuario.js";

export class Chat {
  constructor() {
    this.containerChat = document.createElement("div");
    this.containerChat.classList.add("container-chats");

    this.compoenenteUsuario = new Usuario(undefined, "../../img/avatar.png", undefined, undefined);
    this.componenteHeader = new Header(this.compoenenteUsuario.nombre, this.compoenenteUsuario.avatarUrl, this.compoenenteUsuario.idUsuario, this.compoenenteUsuario.estado);

    this.componenteBuscar = new Buscar();

    this.componenteUsuariosOnline = new ContainerUsuarios();

    this.containerChat.append(this.componenteHeader.header);
    this.containerChat.append(this.componenteBuscar.containerBuscar);

    this.containerChat.append(this.componenteUsuariosOnline.divContainerUsuariosOnline);
  }
}

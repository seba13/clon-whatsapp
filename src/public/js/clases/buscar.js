
export class Buscar {
  constructor() {
    this.containerBuscar = document.createElement("div");
    this.containerBuscar.classList.add("container-buscar");

    this.inputBuscar = document.createElement("div");
    this.inputBuscar.classList.add("input-buscar");

    this.botonBuscar = document.createElement("button");

    this.botonesBuscar = {
      botonvolver: `<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve">
        <path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
      </svg>`,
      botonBuscar: `<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve">
      <path
        fill="currentColor"
        d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
      ></path>
    </svg>`,
      botonFiltrar: `  <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve">
        <path fill="currentColor" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path>
      </svg>`,
    };

    this.spanBotonVolver = document.createElement("span");
    this.spanBotonVolver.classList.add("icon-volver", "ocultar");
    this.spanBotonVolver.innerHTML = this.botonesBuscar.botonvolver;

    this.spanBotonBuscar = document.createElement("span");
    this.spanBotonBuscar.classList.add("icon-buscar");
    this.spanBotonBuscar.innerHTML = this.botonesBuscar.botonBuscar;

    this.inputBuscar.append(this.botonBuscar)
    this.botonBuscar.append(this.spanBotonVolver);
    this.botonBuscar.append(this.spanBotonBuscar);

    this.divFiltrarChat = document.createElement("div");
    this.divFiltrarChat.classList.add("filtrar-chat");

    this.input = document.createElement("p");
    this.input.classList.add("texto-filtrar");
    this.input.dataset.texto = "Busca un chat o inicia uno nuevo.";

    this.divFiltrarChat.append(this.input);

    this.botonFiltrar = document.createElement("div");
    this.botonFiltrar.classList.add("boton-filtrar");

    this.spanBotonFiltrar = document.createElement("span");
    this.spanBotonFiltrar.innerHTML = this.botonesBuscar.botonFiltrar;

    this.botonFiltrar.append(this.spanBotonFiltrar)

    this.containerBuscar.append(this.inputBuscar);
    this.inputBuscar.append(this.divFiltrarChat)
    this.inputBuscar.append(this.botonFiltrar);
  }

}

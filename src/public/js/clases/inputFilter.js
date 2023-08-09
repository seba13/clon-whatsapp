export class InputFilter {
  constructor(inputFiltrar) {
    this.inputFiltrar = inputFiltrar;
    this.inputFiltrar.textContent = this.inputFiltrar.dataset.texto;
    this.inputFiltrar.style.fontSize = "14px";

    this.iconVolver = document.querySelector(".icon-volver");
    this.iconBuscar = document.querySelector(".icon-buscar");

    this.bindOcultarIconVolver = this.ocultarIconVolver.bind(this);

    this.iconBuscar.addEventListener("click", this.ocultarIconBuscar.bind(this));
    this.iconBuscar.addEventListener("click", this.inputEditable.bind(this));
    this.inputFiltrar.addEventListener("click", this.ocultarIconBuscar.bind(this));

    this.iconVolver.addEventListener("click", this.ocultarIconVolver.bind(this));
    this.inputFiltrar.addEventListener("blur", this.ocultarIconVolver.bind(this));

    this.inputFiltrar.addEventListener("blur", this.textoDefecto.bind(this));
    this.inputFiltrar.addEventListener("pointerdown", this.inputEditable.bind(this));
    this.inputFiltrar.addEventListener("focus", this.vaciarInput.bind(this));
    this.inputFiltrar.addEventListener("input", this.filtrarUsuarios.bind(this));

    document.querySelector(".users-online")?.addEventListener("transitionend", this.ocultarUsuario.bind(this));
  }

  textoDefecto(e) {
    console.log("4");
    if (e.target.textContent.trim() == "") {
      e.target.textContent = e.target.dataset.texto;
      e.target.style.fontSize = "14px";
    }

    e.target.setAttribute("contenteditable", "false");
  }

  inputEditable(e) {
    console.log("2");
    this.inputFiltrar.setAttribute("contenteditable", "true");
    this.inputFiltrar.focus();
  }

  ocultarIconBuscar(e) {
    console.log("3");
    if (!this.iconBuscar.classList.contains("ocultar")) {
      this.iconBuscar.classList.add("ocultar");
      this.iconVolver.classList.remove("ocultar");
    }
  }

  ocultarIconVolver(e) {
    console.log("1");
    if (!this.iconVolver.classList.contains("ocultar")) {
      this.iconBuscar.classList.remove("ocultar");
      this.iconVolver.classList.add("ocultar");
    }
  }

  vaciarInput(e) {
    console.log("5");
    if (e.target.textContent === e.target.dataset.texto) {
      e.target.textContent = "";
      e.target.style.fontSize = "";
    }
  }

  filtrarUsuarios(e) {
    console.log("6");
    this.usuarios = this.inputFiltrar.closest(".container-chats").getElementsByClassName("user-online");

    [...this.usuarios].forEach((usuario) => {
      if (!usuario.querySelector(".nombre-user").textContent.toLowerCase().includes(e.target.textContent.toLowerCase())) {
        usuario.querySelector(".nombre-user").closest(".user-online").classList.add("ocultar-usuario");

        // usuario.querySelector(".nombre-user").closest(".user-online").style.display = "none";
      } else {
        // usuario.querySelector(".nombre-user").closest(".user-online").style.display = "";

        // new Promise((res) => {
        //   usuario.querySelector(".nombre-user").closest(".user-online").style.height = "";
        //   usuario.querySelector(".nombre-user").closest(".user-online").style.padding = "";

        //   res(usuario.querySelector(".nombre-user").closest(".user-online"));
        // }).then((usuario) => {
        //   usuario.classList.remove("ocultar-usuario");
        // });

        usuario.querySelector(".nombre-user").closest(".user-online").classList.remove("ocultar-usuario");
      }
    });
  }

  ocultarUsuario(e) {
    console.log("7");
    console.log(e);

    if (e.propertyName == "opacity" && e.target.classList.contains("ocultar-usuario")) {
      //   e.target.style.height = "0";
      //   e.target.style.padding = "0";
    }
  }
}

// inputFiltrar.addEventListener("blur", (e) => {
//   if (e.target.textContent.trim() == "") {
//     e.target.textContent = e.target.dataset.texto;
//     e.target.style.fontSize = "14px";
//   }

//   e.target.setAttribute("contenteditable", "false");
// });

// inputFiltrar.addEventListener("mousedown", (e) => {
//   e.target.setAttribute("contenteditable", "true");
// });

// inputFiltrar.addEventListener("focus", (e) => {
//   if (e.target.textContent === e.target.dataset.texto) {
//     e.target.textContent = "";
//     e.target.style.fontSize = "";
//   }
// });

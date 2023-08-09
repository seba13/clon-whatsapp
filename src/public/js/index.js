import { ScrollBar } from "./clases/scrollbar.js";
import { InputFilter } from "./clases/inputFilter.js";
import { UsuariosChat } from "./clases/usuariosChat.js";
import { crearCirculos } from "./clases/circulo.js";
import { Chat } from "./clases/chat.js";

const bdUsuariosOnline = [
  {
    nombreUsuario: "Sofía",
    mensajes: undefined,
    fotoPerfil40: "../img/profile-1 - copia.jpg",
    fotoPerfil400: "../img/profile-1.jpg",
  },
  {
    nombreUsuario: "Carlos",
    mensajes: undefined,
    fotoPerfil40: "../img/profile-2 - copia.jpg",
    fotoPerfil400: "../img/profile-2.jpg",
  },
  {
    nombreUsuario: "Damián",
    mensajes: undefined,
    fotoPerfil40: "../img/profile-3 - copia.jpg",
    fotoPerfil400: "../img/profile-3.jpg",
  },
  {
    nombreUsuario: "Juliana",
    mensajes: undefined,
    fotoPerfil40: "../img/profile-4 - copia.jpg",
    fotoPerfil400: "../img/profile-4.jpg",
  },
];

crearCirculos();

const usuariosOnline = [];
const componenteChat = new Chat();

document.querySelector(".container-app").prepend(componenteChat.containerChat);

for (let i = 0; i < 100; i++) {
  bdUsuariosOnline.forEach(({ nombreUsuario, mensajes, fotoPerfil40, fotoPerfil400 }) => {
    usuariosOnline.push(new UsuariosChat(nombreUsuario, mensajes, fotoPerfil40, fotoPerfil400));
  });
}

// const usuariosOnline = bdUsuariosOnline.map(({ nombreUsuario, mensajes, fotoPerfil40, fotoPerfil400 }) => {
//   return new Usuario(nombreUsuario, mensajes, fotoPerfil40, fotoPerfil400);
// });

const isDarkModeEnabled = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkModeEnabled) {
  document.body.classList.add("dark");
}

const inputFiltrar = document.querySelector(".texto-filtrar");
const containerUsuariosOnline = document.querySelector(".users-online");
const containerMensaje = document.querySelector(".intro");
const btnOcultarUsuarios = document.querySelector(".toggle-usuarios");
const btnMostrarUsuarios = document.querySelector(".toggle-usuarios.abrir");

let scrollBarUsers = new ScrollBar(containerUsuariosOnline);
let scrollBarMensaje = new ScrollBar(containerMensaje);
let inputFilter = new InputFilter(inputFiltrar);

console.log(btnMostrarUsuarios);

btnOcultarUsuarios.addEventListener("click", () => {
  document.querySelector(".container-chats").classList.add("cerrar");
  document.querySelector(".container-mensajes").classList.add("full-width");

  btnMostrarUsuarios.classList.add("mostrar");
});

btnMostrarUsuarios.addEventListener("click", () => {
  document.querySelector(".container-chats").classList.remove("cerrar");
  document.querySelector(".container-mensajes").classList.remove("full-width");

  btnMostrarUsuarios.classList.remove("mostrar");
});

function agregarUsuarios() {
  usuariosOnline.forEach((usuario) => {
    
    componenteChat.componenteUsuariosOnline.agregarUsuario(usuario.divUserOnline);
    
  });

  scrollBarUsers.añadirScroll();
}

agregarUsuarios();

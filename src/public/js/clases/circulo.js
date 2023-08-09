export class Circulo {
    static limpiar() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    constructor(canvas, ctx) {
      this.canvas = canvas;
  
      if (window.innerWidth < 480 || window.innerHeight < 760) {
        this.radio = Math.min(window.innerWidth / 3, window.innerHeight / 3);
      } else {
        this.radio = Math.min(window.innerWidth / 4, window.innerHeight / 4);
      }
  
      this.posicion = {
        x: Math.random() * (this.canvas.width - this.radio * 2) + this.radio,
        y: Math.random() * (this.canvas.height - this.radio * 2) + this.radio,
      };
  
      const CONSTANTE_VEL = (Math.random() * .8   -.5) + .5  
      this.velocidad = {
  
        x: Math.random() < 0.5 ? -CONSTANTE_VEL: CONSTANTE_VEL,
        y: Math.random() < 0.5 ? -CONSTANTE_VEL : CONSTANTE_VEL,
      };
      this.ctx = ctx;
  
      // this.crearGradiente();
    }
  
    crearGradiente() {
      this.gradiente = this.ctx.createRadialGradient(this.posicion.x, this.posicion.y, 0, this.posicion.x, this.posicion.y, this.radio);
  
      this.gradiente.addColorStop(0, "rgba(0, 157, 226, .4)");
      this.gradiente.addColorStop(1, "rgba(0, 157, 226, 0)");
    }
  
    dibujar() {
      this.ctx.save();
  
      // this.ctx.globalAlpha = 0.2;
  
      this.ctx.beginPath();
      this.ctx.arc(this.posicion.x, this.posicion.y, this.radio, 0, 2 * Math.PI);
  
      this.ctx.fillStyle = this.gradiente;
      this.ctx.fill();
      this.ctx.closePath();
  
      this.ctx.restore();
    }
  
    actualizar() {
      this.posicion.y += this.velocidad.y;
      this.posicion.x += this.velocidad.x;
  
      if (this.posicion.y >= this.canvas.height - this.radio) {
        this.velocidad.y = Math.abs(this.velocidad.y) * -1;
      }
  
      if (this.posicion.y - this.radio <= 0) {
        this.velocidad.y = Math.abs(this.velocidad.y);
      }
  
      if (this.posicion.x >= this.canvas.width - this.radio) {
        this.velocidad.x = Math.abs(this.velocidad.x) * -1;
      }
      if (this.posicion.x - this.radio <= 0) {
        this.velocidad.x = Math.abs(this.velocidad.x);
      }
    }
  
    animar() {
      this.actualizar();
      this.crearGradiente();
      this.dibujar();
    }
  
    detectarColision(circulo) {
      const distanciaX = this.posicion.x - circulo.posicion.x;
      const distanciaY = this.posicion.y - circulo.posicion.y;
      const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  
      if (distancia < this.radio + circulo.radio) {
        // Colisión detectada, cambiamos la dirección de velocidad en ambos círculos
        const angulo = Math.atan2(distanciaY, distanciaX);
        const cos = Math.cos(angulo);
        const sin = Math.sin(angulo);
  
        // Calcular nuevas velocidades para este círculo
        const velocidadX1 = this.velocidad.x * cos + this.velocidad.y * sin;
        const velocidadY1 = this.velocidad.y * cos - this.velocidad.x * sin;
  
        // Calcular nuevas velocidades para el otro círculo
        const velocidadX2 = circulo.velocidad.x * cos + circulo.velocidad.y * sin;
        const velocidadY2 = circulo.velocidad.y * cos - circulo.velocidad.x * sin;
  
        // Intercambiar velocidades
        this.velocidad.x = velocidadX2;
        this.velocidad.y = velocidadY2;
        circulo.velocidad.x = velocidadX1;
        circulo.velocidad.y = velocidadY1;
  
        console.log("colision!!!");
      }
    }
  }
  
  let idAnimation = null;
  export function animar(ctx, circulos) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  
    circulos.forEach((circulo) => {
      circulo.animar();
    });
  
    idAnimation = requestAnimationFrame(() => animar(ctx, circulos));
  }
  
  export function crearCirculos() {
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const ctx = canvas.getContext("2d");
  
    // const radio = Math.max(100, Math.min(canvas.width / 16, canvas.height / 16));
  
    let radio = 0;
  
    const circulo1 = new Circulo(canvas, ctx);
    const circulo2 = new Circulo(canvas, ctx);
  
    const circulos = [];
    circulos.push(circulo1);
    circulos.push(circulo2);
  
    animar(ctx, circulos);
  
    window.addEventListener("resize", () => {
      const canvas = document.querySelector("canvas");
  
      console.log("resize");
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      //   cancelAnimationFrame(idAnimation)
  
      circulos.forEach((circulo) => {
        if (window.innerWidth < 480 || window.innerHeight < 760) {
          circulo.radio = Math.min(window.innerWidth / 3, window.innerHeight / 3);
        } else {
          circulo.radio = Math.min(window.innerWidth / 4, window.innerHeight / 4);
        }
      });
  
      // crearCirculos();
    });
  }
  
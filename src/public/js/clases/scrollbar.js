export class ScrollBar {
  constructor(elementoContainer) {
    this.elementoContainer = elementoContainer;

    this.añadirScroll();

    this.posTopScrollBar = 0;

    this.elementoContainer.addEventListener("wheel", this.scrollUsers.bind(this));
    this.elementoContainer.addEventListener("scroll", this.moverScroll.bind(this));

    this.elementoContainer.addEventListener("pointerdown", this.pointerDown.bind(this));

    // this.elementoContainer.addEventListener("resize", this.añadirScroll.bind(this));

    this.observer = new ResizeObserver(this.añadirScroll.bind(this));
    this.observer.observe(this.elementoContainer);

    this.elementoContainer.addEventListener("touchstart", this.touchDown.bind(this));

    this.elementoContainer.addEventListener("touchmove", this.touchMove.bind(this));

    this.movimientoTouchY = 0;
  }

  pointerDown(e) {
    if (e.target == this.scrollBar || e.target == this.scrollBarContainer) {
      this.bindPointerUp = this.pointerUp.bind(this);
      this.bindPointerMove = this.pointerMove.bind(this);

      this.mouseYDown = e.clientY;

      this.coordContainer = this.scrollBarContainer.getBoundingClientRect();
      this.coordScrollBar = this.scrollBar.getBoundingClientRect();

      if (e.target == this.scrollBarContainer) {
        this.mouseDeltaCoord = this.mouseYDown - this.coordContainer.top;

        this.desplazamiento = this.mouseDeltaCoord;

        if (e.clientY > this.coordScrollBar.top + this.altoScrollBar) {
          this.desplazamiento -= this.altoScrollBar;
        }
        this.scrollBar.style.setProperty("--pos-top", this.desplazamiento + "px");

        // transición solo cuando se presiona el contenedor de barra
        this.scrollBar.style.transition = "top .05s ease-in-out";

        this.scrollBar.addEventListener(
          "transitionend",
          function (e) {
            if (e.propertyName == "top") {
              this.scrollBar.style.transition = "";
            }
          }.bind(this)
        );

        let porcentajeScrollBar = Math.round((this.desplazamiento * 100) / (this.scrollBarContainer.clientHeight - this.altoScrollBar));

        let scrollTo = Math.round(((this.elementoContainer.scrollHeight - this.elementoContainer.clientHeight) * porcentajeScrollBar) / 100);

        this.elementoContainer.scrollTo({
          top: scrollTo,
          behavior: "smooth",
        });
      } else {
        document.addEventListener("pointerup", this.bindPointerUp);
        document.addEventListener("pointermove", this.bindPointerMove);
      }
    }
  }

  pointerMove(e) {
    const deltaY = e.clientY - this.mouseYDown;

    console.log(deltaY);
    const newTop = Math.max(0, Math.min(this.coordScrollBar.top - this.coordContainer.top + deltaY, this.coordContainer.height - this.altoScrollBar));

    // const contentScrollTop = (newTop / (this.elementoContainer.clientHeight - this.altoScrollBar)) * (this.elementoContainer.scrollHeight - this.elementoContainer.scrollHeight.clientHeight);
    // content.scrollTop = contentScrollTop;

    this.scrollBar.style.setProperty("--pos-top", newTop + "px");

    const scrollAmount = (newTop / (this.elementoContainer.clientHeight - this.altoScrollBar)) * (this.elementoContainer.scrollHeight - this.elementoContainer.clientHeight);

    this.elementoContainer.scrollTo({
      top: scrollAmount,
    });
  }

  pointerUp(e) {
    console.log("up");

    document.removeEventListener("pointerup", this.bindPointerUp);
    document.removeEventListener("pointermove", this.bindPointerMove);
  }

  touchDown(e) {
    this.movimientoTouchY = e.touches[0].clientY;

    this.startTimestamp = Date.now();
  }

  touchMove(e) {
    e.preventDefault(); // Evita el comportamiento de desplazamiento predeterminado

    var currentY = e.touches[0].clientY; // Obtiene la posición actual del toque
    var deltaY = this.movimientoTouchY - currentY; // Calcula el desplazamiento en la dirección y

    this.elementoContainer.scrollTop += deltaY; // Aplica el desplazamiento al contenido

    this.movimientoTouchY = currentY; // Actualiza la posición inicial del toque
  }

  scrollUsers(e) {
    if (e.deltaY > 0) {
      if (this.elementoContainer.clientHeight + this.elementoContainer.scrollTop < this.elementoContainer.scrollHeight) {
        this.elementoContainer.scrollBy({
          top: 200,
          behavior: "smooth",
        });
      }
    } else if (e.deltaY < 0) {
      if (this.elementoContainer.scrollTop > 0) {
        this.elementoContainer.scrollBy({
          top: -200,
          behavior: "smooth",
        });
      }
    }
  }

  moverScroll(e) {
    if (this.elementoContainer.scrollTop > 0 && this.elementoContainer.clientHeight + this.elementoContainer.scrollTop < this.elementoContainer.scrollHeight) {
      const scrollPercentage = (this.elementoContainer.scrollTop / (this.elementoContainer.scrollHeight - this.elementoContainer.clientHeight)) * 100;

      const scrollbarPosition = (this.elementoContainer.clientHeight - this.altoScrollBar) * (scrollPercentage / 100);

      let coordContainer = this.elementoContainer.getBoundingClientRect();
      let coordBarraScroll = this.scrollBar.getBoundingClientRect();

      let posContainer = coordContainer.top + coordContainer.height;

      if (this.altoScrollBar + scrollbarPosition > posContainer) {
        scrollbarPosition = posContainer - this.altoScrollBar;
      }

      this.scrollBar.style.setProperty("--pos-top", scrollbarPosition + "px");
    }
  }

  añadirScroll() {
    if (this.elementoContainer.clientHeight < this.elementoContainer.scrollHeight) {
      if (!this.elementoContainer.querySelector(".container-scroll-bar")) {
        this.scrollBarContainer = document.createElement("span");
        this.scrollBarContainer.classList.add("container-scroll-bar");

        this.scrollBar = document.createElement("span");
        this.scrollBar.classList.add("scroll-bar");

        this.scrollBarContainer.append(this.scrollBar);
        this.elementoContainer.append(this.scrollBarContainer);

        this.altoScrollBar = Math.max(Math.round((this.elementoContainer.clientHeight / this.elementoContainer.scrollHeight) * this.elementoContainer.clientHeight), 30);

        this.scrollBar.style.setProperty("--alto-scroll", this.altoScrollBar + "px");
      } else {
        this.altoScrollBar = Math.max(Math.round((this.elementoContainer.clientHeight / this.elementoContainer.scrollHeight) * this.elementoContainer.clientHeight), 30);

        this.scrollBar.style.setProperty("--alto-scroll", this.altoScrollBar + "px");
      }
    } else if (this.elementoContainer.clientHeight >= this.elementoContainer.scrollHeight) {
      if (this.elementoContainer.querySelector(".container-scroll-bar")) {
        this.elementoContainer.querySelector(".container-scroll-bar").remove();
      }
    }
  }
}

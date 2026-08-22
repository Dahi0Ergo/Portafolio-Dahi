
const botonesDePestana = document.querySelectorAll(".tab-btn");
const secciones = document.querySelectorAll(".page");


const barraDeNavegacion = document.querySelector(".navbar");

// Relaciona el id de cada sección con el color que debe tener
// la navbar cuando esa sección está activa. Los valores son las
// mismas variables de color que ya usa el CSS de cada sección.
const coloresPorSeccion = {
  "inicio": "var(--color-rojo-inicio)",
  "sobre-mi": "var(--color-vino)",
  "portafolio": "var(--color-azul)",
  "contacto": "var(--color-crema)",
};


function mostrarSeccion(idSeccionAMostrar) {


  secciones.forEach(function (seccion) {


    if (seccion.id === idSeccionAMostrar) {
      seccion.classList.add("active");
    } else {
      seccion.classList.remove("active");
    }
  });


  botonesDePestana.forEach(function (boton) {

    const destinoDelBoton = boton.dataset.target;

    if (destinoDelBoton === idSeccionAMostrar) {
      boton.classList.add("active");
    } else {
      boton.classList.remove("active");
    }
  });


  // Cambia el color de fondo de la navbar para que combine
  // con la sección que se está mostrando (incluido Inicio)
  if (coloresPorSeccion[idSeccionAMostrar]) {
    barraDeNavegacion.style.backgroundColor = coloresPorSeccion[idSeccionAMostrar];
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


botonesDePestana.forEach(function (boton) {

  boton.addEventListener("click", function () {

    const destino = boton.dataset.target;

    mostrarSeccion(destino);
  });
});


const formularioContacto = document.getElementById("contact-form");
const mensajeDeConfirmacion = document.getElementById("form-msg");

if (formularioContacto) {

  formularioContacto.addEventListener("submit", function (evento) {


    evento.preventDefault();


    const datosDelFormulario = new FormData(formularioContacto);
    const nombreEscrito = datosDelFormulario.get("nombre");



    mensajeDeConfirmacion.textContent =
      "¡Gracias, " + nombreEscrito + "! Tu mensaje fue enviado. Te contactaré pronto ✉️";


    formularioContacto.reset();
  });
}


function abrirImagen(ruta, titulo) {


  const visor = document.getElementById("visor-imagen");
  const imagen = document.getElementById("imagen-ampliada");
  const tituloImagen = document.getElementById("titulo-imagen");


  imagen.src = ruta;


  imagen.alt = titulo;


  tituloImagen.textContent = titulo;


  visor.classList.add("activo");


  document.body.style.overflow = "hidden";
}



function cerrarImagen(event) {


  if (
    event &&
    event.target !== event.currentTarget
  ) {
    return;
  }


  const visor = document.getElementById("visor-imagen");


  visor.classList.remove("activo");

  document.body.style.overflow = "";
}


document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    const visor = document.getElementById("visor-imagen");


    visor.classList.remove("activo");

    document.body.style.overflow = "";
  }

});


// Al cargar la página, la sección "inicio" ya viene marcada como
// activa en el HTML. Esta línea sincroniza la navbar (su color
// y qué botón se ve resaltado) para que coincida desde el principio,
// sin necesidad de hacer clic en ningún botón primero.
mostrarSeccion("inicio");


// =====================================================
// BOTÓN DE MÚSICA (play / pausa)
// =====================================================
const musicaFondo = document.getElementById("musica-fondo");
const botonMusica = document.getElementById("btn-musica");
const iconoPlay = botonMusica ? botonMusica.querySelector(".icono-play") : null;
const iconoPausa = botonMusica ? botonMusica.querySelector(".icono-pausa") : null;

if (botonMusica && musicaFondo) {

  botonMusica.addEventListener("click", function () {

    if (musicaFondo.paused) {
      musicaFondo.play();
      iconoPlay.style.display = "none";
      iconoPausa.style.display = "block";
      botonMusica.setAttribute("aria-label", "Pausar música");
      botonMusica.setAttribute("title", "Pausar música");
    } else {
      musicaFondo.pause();
      iconoPlay.style.display = "block";
      iconoPausa.style.display = "none";
      botonMusica.setAttribute("aria-label", "Reproducir música");
      botonMusica.setAttribute("title", "Reproducir música");
    }
  });
}
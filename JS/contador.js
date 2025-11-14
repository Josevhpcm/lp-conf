/* === CONTADOR REGRESIVO PERSISTENTE === */
const fechaEventoReal = new Date("November 11, 2025 19:00:00 GMT-7").getTime();

let fechaGuardada = localStorage.getItem("fechaEventoGuardada");
if (!fechaGuardada || parseInt(fechaGuardada) < Date.now()) {
  localStorage.setItem("fechaEventoGuardada", fechaEventoReal);
  fechaGuardada = fechaEventoReal;
} else {
  fechaGuardada = parseInt(fechaGuardada);
}

const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const contador = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaGuardada - ahora;

  if (diferencia <= 0) {
    contador.innerHTML = "<strong >🎉 ¡El evento está comenzando!</strong>";
    contador.style.zIndex = "9999";
    contador.style.position = "relative";

    function ajustarTamanoFuente() {
      let width = window.innerWidth; // Obtén el ancho de la ventana
      let fontSize;

      if (width <= 450) {
        fontSize = "1em"; // En pantallas muy pequeñas (por ejemplo, móviles más pequeños)
      } else if (width < 600) {
        fontSize = "1.5em"; // En pantallas pequeñas
      } else if (width < 900) {
        fontSize = "2em"; // En pantallas medianas
      } else {
        fontSize = "2.5em"; // En pantallas grandes
      }

      // Aplicar el tamaño de la fuente
      contador.style.fontSize = fontSize;
    }

    // Llamar a la función cuando se cargue la página
    ajustarTamanoFuente();

    // Añadir un evento para cambiar el tamaño de la fuente cuando se cambie el tamaño de la ventana
    window.addEventListener("resize", ajustarTamanoFuente);

    localStorage.removeItem("fechaEventoGuardada");
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  diasEl.textContent = String(dias).padStart(2, "0");
  horasEl.textContent = String(horas).padStart(2, "0");
  minutosEl.textContent = String(minutos).padStart(2, "0");
  segundosEl.textContent = String(segundos).padStart(2, "0");
}

actualizarContador();
setInterval(actualizarContador, 1000);

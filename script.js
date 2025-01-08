// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
  .timeline({ loop: true })
  .add({
    targets: '.ml1 .letter',
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: 'easeOutExpo',
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: '.ml1 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: 'easeOutExpo',
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000,
  });

//Menú responsive
let menuVisible = false;

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById('nav').classList = '';
    menuVisible = false;
  } else {
    document.getElementById('nav').classList = 'responsive';
    menuVisible = true;
  }
}

function seleccionar() {
  // Ocultar menu después de seleccionar opción
  document.getElementById('nav').classList = '';
  menuVisible = false;
}

function updateProgressBar() {
  // Obtener la fecha actual y la fecha inicial y final del año 2025
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1); // 1 de enero
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1); // 1 de enero del siguiente año
  const year = now.getFullYear();
  const fecha = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`; // Formatear la fecha

  // Calcular el porcentaje del año transcurrido
  const elapsedTime = now - startOfYear; // Tiempo transcurrido en ms
  const totalTime = endOfYear - startOfYear; // Tiempo total del año en ms
  const percentage = Math.min((elapsedTime / totalTime) * 100, 100).toFixed(2); // % del año completado

  // Actualizar la barra de progreso y el texto
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');

  progressBar.style.width = `${percentage}%`;
  //progressBar.textContent = `${percentage}%`;
  progressText.textContent = `Hoy es ${fecha} y se ha completado un ${percentage}% del año ${year}`;

  const yearProgressTitle = document.getElementById('title-year-progress');
  yearProgressTitle.textContent = `Progreso del año ${year}`;
  const yearCopyright = document.getElementById('year-copyright');
  yearCopyright.textContent = `${year}`;
}

// Actualizar la barra de progreso cada segundo
setInterval(updateProgressBar, 1000);

// Inicializar la barra de progreso
updateProgressBar();

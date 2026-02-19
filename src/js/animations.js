// Js para animaciones de AOS
// 1. Importamos la lógica de AOS
import AOS from 'aos'
// 2. Importamos los estilos de AOS
import 'aos/dist/aos.css'

// 3. Inicializamos AOS para que empiece a "escuchar" el scroll
export function initAnimations() {
  AOS.init({
    duration: 1000, // Duración de la animación en milisegundos (1 segundo)
    once: true,    // La animación solo ocurre una vez (al bajar)
  });
}



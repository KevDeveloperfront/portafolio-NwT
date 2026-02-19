import './style.css';
import { setupMenu } from './js/menu.js';
import { initAnimations } from './js/animations.js';
import { initParticles } from './js/particles-config.js';

// Ejecutamos las funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  initAnimations();
  initParticles();
  
  console.log('🚀 Portafolio cargado y modularizado');
});
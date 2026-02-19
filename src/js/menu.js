export function setupMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      const icon = menuBtn.querySelector('i');
      icon.classList.toggle('fa-bars-staggered');
      icon.classList.toggle('fa-xmark');
    });
  }
}
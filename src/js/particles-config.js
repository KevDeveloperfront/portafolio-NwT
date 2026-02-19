import { tsParticles } from "@tsparticles/engine";
import { loadLinksPreset } from "@tsparticles/preset-links";

export async function initParticles() {
  await loadLinksPreset(tsParticles);

  await tsParticles.load({
    id: "tsparticles",
    options: {
      preset: "links",
      background: {
        color: "transparent", // Para que no tape tu bg-gray-900
      },
      particles: {
        color: { value: "#22d3ee" }, // Color Cyan-400 de Tailwind
        links: {
          color: "#22d3ee",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
        },
        number: {
          value: 80, // Cantidad de nodos
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // Los nodos se "pegan" al mouse
          },
        },
      },
    },
  });
}
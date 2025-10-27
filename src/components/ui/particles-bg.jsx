import { useEffect, useCallback } from "react";

export default function ParticlesComponent() {
  const initParticles = useCallback((isDark) => {
    // Wait for particles.js to be available
    if (!window.particlesJS) {
      setTimeout(() => initParticles(isDark), 100);
      return;
    }

    // cleanup old canvas
    const oldCanvas = document.querySelector("#particles-js canvas");
    if (oldCanvas) oldCanvas.remove();

    if (window.pJSDom?.length > 0) {
      window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
      window.pJSDom = [];
    }

    const colors = isDark
      ? {
          particles: "#00f5ff",
          lines: "#00d9ff",
          accent: "#0096c7",
        }
      : {
          particles: "#4f46e5",
          lines: "#7c3aed",
          accent: "#2563eb",
        };

    window.particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: colors.particles },
        shape: { 
          type: "circle", 
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: colors.lines,
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: { opacity: 1 }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true,
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log('Particles.js loaded successfully');
      const html = document.documentElement;
      const detectDark = () =>
        html.classList.contains("dark") ||
        html.getAttribute("data-theme") === "dark";

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        initParticles(detectDark());
      }, 100);

      // observe changes from theme button
      const observer = new MutationObserver(() =>
        initParticles(detectDark())
      );
      observer.observe(html, {
        attributes: true,
        attributeFilter: ["class", "data-theme"],
      });
    };

    script.onerror = () => {
      console.error('Failed to load particles.js');
    };

    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {
        // ignore if script already removed
      }
    };
  }, [initParticles]);

  return (
    <div
      id="particles-js"
      className="w-full h-full absolute top-0 left-0 pointer-events-auto transition-colors duration-500"
      style={{
        background: 'transparent'
      }}
    />
  );
}
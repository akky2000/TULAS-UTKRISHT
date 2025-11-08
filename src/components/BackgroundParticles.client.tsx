'use client';

import { useCallback, useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import type { Engine } from "tsparticles-engine";

// Dynamically import Particles with no SSR
const Particles = dynamic(
  () => import('react-tsparticles').then((mod) => mod.default),
  { ssr: false }
);

const loadParticlesSlim = () => import("tsparticles-slim").then((mod) => mod.loadSlim);

const BackgroundParticles = () => {
  const [mounted, setMounted] = useState(false);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    const loadSlim = await loadParticlesSlim();
    await loadSlim(engine);
    setParticlesLoaded(true);
  }, []);

  // Don't render anything on the server or during hydration
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10">
      {particlesLoaded && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: ["#eab308", "#06b6d4", "#f59e0b"],
              },
              links: {
                color: "#eab308",
                distance: 180,
                enable: true,
                opacity: 0.2,
                width: 1.5,
                triangles: {
                  enable: true,
                  opacity: 0.05,
                  color: "#06b6d4",
                },
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.6,
                straight: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              shape: {
                type: ["circle", "triangle"],
              },
              size: {
                value: { min: 1, max: 4 },
                random: true,
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.5,
                  sync: false,
                },
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.5,
                    color: "#eab308",
                  },
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};

export default BackgroundParticles;

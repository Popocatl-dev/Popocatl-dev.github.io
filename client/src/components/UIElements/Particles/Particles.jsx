import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import {
  DARK_THEME_PARTICLES,
  LIGHT_THEME_PARTICLES,
} from './particleType';
import { useThemeContext } from '../../../hooks/themeHook/themeHook';

const ParticlesReact = () => {
  const [init, setInit] = useState(false);
  const { dark } = useThemeContext();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particles = dark
    ? DARK_THEME_PARTICLES
    : LIGHT_THEME_PARTICLES;

  const particlesLoaded = (container) => {
        console.log("particles loaded");
  };
  return (
    <>
    { init && <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        particles: particles,
        fpsLimit: 60,
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />}
    </>
  );
};

export default ParticlesReact;

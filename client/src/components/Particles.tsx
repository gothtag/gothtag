import { useEffect } from 'react';

export function Particles() {
  useEffect(() => {
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.bottom = '0';
      particle.style.animation = `float ${6 + Math.random() * 8}s linear`;
      particle.style.animationDelay = Math.random() * 2 + 's';
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 14000);
    }

    // Generate particles periodically
    const interval = setInterval(createParticle, 2000);
    
    // Initial particles
    for (let i = 0; i < 3; i++) {
      setTimeout(createParticle, i * 600);
    }

    return () => {
      clearInterval(interval);
      document.querySelectorAll('.particle').forEach(p => p.remove());
    };
  }, []);

  return null;
}

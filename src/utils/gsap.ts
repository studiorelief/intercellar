import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function homeAnimCards() {
  // Assurez-vous que les triggers sont correctement fixés après le chargement complet de la page
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });

  // Assurez-vous que les triggers sont recalibrés après un redimensionnement de la fenêtre
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });

  // Utilisation d'une assertion de type pour convertir le résultat de toArray en 'gsap.DOMTarget[]'

  /**
   * * Cards anim
   */
  gsap.set('.real-v2_cards-c.is-1', { rotateX: -90 });
  gsap.to('.real-v2_cards-c.is-1', {
    scrollTrigger: {
      markers: true,
      trigger: '.real-v2_scroll-step-1',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    y: '-100vh',
    ease: 'none',
    transformOrigin: 'center',
    force3D: true,
  });

  /**
   * * Videos fade
   */

  gsap.set('.real-v2_anim-video.is-1', { opacity: 1 });
  gsap.to('.real-v2_anim-video.is-1', {
    scrollTrigger: {
      markers: true,
      trigger: '.real-v2_scroll-step-1',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    opacity: 0,
    ease: 'none',
  });
  gsap.set('.real-v2_anim-video.is-2', { opacity: 1 });
  gsap.to('.real-v2_anim-video.is-2', {
    scrollTrigger: {
      markers: true,
      trigger: '.real-v2_scroll-step-2',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    opacity: 0,
    ease: 'none',
  });
  gsap.set('.real-v2_anim-video.is-3', { opacity: 1 });
  gsap.to('.real-v2_anim-video.is-3', {
    scrollTrigger: {
      markers: true,
      trigger: '.real-v2_scroll-step-3',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    opacity: 0,
    ease: 'none',
  });
  gsap.set('.real-v2_anim-video.is-4', { opacity: 1 });
  gsap.to('.real-v2_anim-video.is-4', {
    scrollTrigger: {
      markers: true,
      trigger: '.real-v2_scroll-step-4',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    opacity: 0,
    ease: 'none',
  });
}

export function homeAnimEvent() {
  gsap.set('.event-v2_bg-video-wrapper', { height: '2px' });
  gsap.to('.event-v2_bg-video-wrapper', {
    scrollTrigger: {
      markers: true,
      trigger: '.section_event-v2',
      start: '20% 50%',
      end: '55% 50%',
      scrub: true,
    },
    height: '50vh',
  });

  gsap.set('.event-v2_subheading', { opacity: 0 });
  gsap.to('.event-v2_subheading', {
    scrollTrigger: {
      markers: true,
      trigger: '.section_event-v2',
      start: '35% 50%',
      end: '75% 50%',
      scrub: true,
    },
    opacity: 1,
  });

  gsap.set('.event-v2_heading-wrapper', { x: 0 });
  gsap.to('.event-v2_heading-wrapper', {
    scrollTrigger: {
      markers: true,
      trigger: '.section_event-v2',
      start: '25% 50%',
      end: '65% 50%',
      scrub: true,
    },
    x: '-20vw',
  });
}

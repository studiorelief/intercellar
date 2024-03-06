import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function homeAnimCards() {
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });

  /**
   * * Cards anim
   */

  // Cards 1
  gsap.set('.real-v2_cards-c.is-1', { y: '0vh', rotateX: 0 });
  gsap.to('.real-v2_cards-c.is-1', {
    scrollTrigger: {
      markers: false,
      trigger: '.real-v2_scroll-step-1',
      start: '50% 50%',
      end: '95% 50%',
      scrub: true,
    },
    y: '-0vh',
    rotateX: 90,
    ease: 'none',
    transformOrigin: 'center',
    force3D: true,
  });
  gsap.set('.real-v2_cards-c.is-1', { opacity: 1, scale: 1 });
  gsap.to('.real-v2_cards-c.is-1', {
    scrollTrigger: {
      markers: false,
      trigger: '.real-v2_scroll-step-1',
      start: '50% 50%',
      end: '150% 50%',
      scrub: true,
    },
    opacity: 0,
    scale: 0.8,
    ease: 'none',
    transformOrigin: 'center',
    force3D: true,
  });

  // Cards 2
  gsap.set('.real-v2_cards-c.is-2', { y: '0vh', rotateX: 0 });
  gsap.to('.real-v2_cards-c.is-2', {
    scrollTrigger: {
      markers: false,
      trigger: '.real-v2_scroll-step-2',
      start: '50% 50%',
      end: '95% 50%',
      scrub: true,
    },
    y: '-0vh',
    rotateX: 90,
    ease: 'none',
    transformOrigin: 'center',
    force3D: true,
  });

  gsap.fromTo(
    '.real-v2_cards-c.is-2',
    {
      opacity: 0,
      scale: 1,
    },
    {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        markers: false,
        trigger: '.real-v2_scroll-step-2',
        start: '-50% 50%',
        end: '50% 50%',
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    '.real-v2_cards-c.is-2',
    {
      opacity: 1,
    },
    {
      opacity: 0.5,
      scale: 0.8,
      scrollTrigger: {
        markers: false,
        trigger: '.real-v2_scroll-step-2',
        start: '50% 50%',
        end: '150% 50%',
        scrub: true,
      },
    }
  );

  // Cards 3
  gsap.set('.real-v2_cards-c.is-3', { y: '0vh', rotateX: 0 });
  gsap.to('.real-v2_cards-c.is-3', {
    scrollTrigger: {
      markers: false,
      trigger: '.real-v2_scroll-step-3',
      start: '50% 50%',
      end: '95% 50%',
      scrub: true,
    },
    y: '-0vh',
    rotateX: 90,
    ease: 'none',
    transformOrigin: 'center',
    force3D: true,
  });

  gsap.fromTo(
    '.real-v2_cards-c.is-3',
    {
      opacity: 0,
      scale: 1,
    },
    {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        markers: false,
        trigger: '.real-v2_scroll-step-3',
        start: '-50% 50%',
        end: '50% 50%',
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    '.real-v2_cards-c.is-3',
    {
      opacity: 1,
    },
    {
      opacity: 0.5,
      scale: 0.8,
      scrollTrigger: {
        markers: false,
        trigger: '.real-v2_scroll-step-3',
        start: '50% 50%',
        end: '150% 50%',
        scrub: true,
      },
    }
  );

  // Cards 4
  gsap.set('.real-v2_cards-c.is-4', { y: '0vh', rotateX: 0 });
  gsap.to('.real-v2_cards-c.is-4', {
    scrollTrigger: {
      markers: false,
      trigger: '.real-v2_scroll-step-4',
      start: '50% 50%',
      end: '95% 50%',
      scrub: true,
    },
    y: '-0vh',
    rotateX: 0,
    ease: 'none',
    transformOrigin: 'center',
    force3D: true,
  });

  gsap.fromTo(
    '.real-v2_cards-c.is-4',
    {
      opacity: 0,
      scale: 1,
    },
    {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        markers: false,
        trigger: '.real-v2_scroll-step-4',
        start: '-50% 50%',
        end: '50% 50%',
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    '.real-v2_cards-c.is-4',
    {
      opacity: 1,
      scale: 1,
    },
    {
      opacity: 0.5,
      scale: 1,
      scrollTrigger: {
        markers: false,
        trigger: '.real-v2_scroll-step-4',
        start: '50% 50%',
        end: '150% 50%',
        scrub: true,
      },
    }
  );

  /**
   * * Videos fade
   */

  // Pour la vidéo 1
  gsap.set('.real-v2_anim-video.is-1', { opacity: 1 });
  gsap.timeline({
    scrollTrigger: {
      trigger: '.real-v2_scroll-step-1',
      start: '100% 50%',
      end: '100% 50%',
      markers: false,
      scrub: true,
      onEnter: () => gsap.to('.real-v2_anim-video.is-1', { opacity: 0, ease: 'none' }),
      onLeaveBack: () => gsap.to('.real-v2_anim-video.is-1', { opacity: 1, ease: 'none' }),
    },
  });

  // Pour la vidéo 2
  gsap.set('.real-v2_anim-video.is-2', { opacity: 1 });
  gsap.timeline({
    scrollTrigger: {
      trigger: '.real-v2_scroll-step-2',
      start: '100% 50%',
      end: '100% 50%',
      markers: false,
      scrub: true,
      onEnter: () => gsap.to('.real-v2_anim-video.is-2', { opacity: 0, ease: 'none' }),
      onLeaveBack: () => gsap.to('.real-v2_anim-video.is-2', { opacity: 1, ease: 'none' }),
    },
  });

  // Pour la vidéo 3
  gsap.set('.real-v2_anim-video.is-3', { opacity: 1 });
  gsap.timeline({
    scrollTrigger: {
      trigger: '.real-v2_scroll-step-3',
      start: '100% 50%',
      end: '100% 50%',
      markers: false,
      scrub: true,
      onEnter: () => gsap.to('.real-v2_anim-video.is-3', { opacity: 0, ease: 'none' }),
      onLeaveBack: () => gsap.to('.real-v2_anim-video.is-3', { opacity: 1, ease: 'none' }),
    },
  });

  // Pour la vidéo 4
  gsap.set('.real-v2_anim-video.is-4', { opacity: 1 });
  gsap.timeline({
    scrollTrigger: {
      trigger: '.real-v2_scroll-step-4',
      start: '40% 50%',
      end: '40% 50%',
      markers: false,
      scrub: false,
      onEnter: () =>
        gsap.to('.real-v2_anim-video.is-4', { opacity: 1, duration: 0.15, ease: 'none' }),
      onLeaveBack: () => gsap.to('.real-v2_anim-video.is-4', { opacity: 1, ease: 'none' }),
    },
  });
}

export function homeAnimEvent() {
  gsap.set('.event-v2_bg-video-wrapper', { height: '2px' });
  gsap.to('.event-v2_bg-video-wrapper', {
    scrollTrigger: {
      markers: false,
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
      markers: false,
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
      markers: false,
      trigger: '.section_event-v2',
      start: '25% 50%',
      end: '65% 50%',
      scrub: true,
    },
    x: '-20vw',
  });
}

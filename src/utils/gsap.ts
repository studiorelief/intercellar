import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function conceptAnimCards() {
  const slides = gsap.utils.toArray<HTMLElement>('.concept-v2_slide');

  slides.forEach((slide) => {
    const cards = slide.querySelectorAll<HTMLElement>('.concept-v2_cards');
    gsap.set(cards, { rotationY: -90, filter: 'blur(0rem)' }); // État initial

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          cards.forEach((card) => {
            const tl = gsap.timeline(); // Création d'une timeline pour chaque carte

            if (!entry.isIntersecting) {
              // Lorsque le slide sort de la vue
              tl.to(card, {
                rotationY: -180,
                duration: 1,
                ease: 'easeout',
                transformOrigin: 'center',
              }).to(
                card,
                {
                  filter: 'blur(1rem)',
                  duration: 0.5,
                  ease: 'easeOut', // Durée différente pour le flou
                },
                0
              ); // Démarre en même temps que la rotation
            } else {
              // Lorsque le slide entre dans la vue
              tl.to(card, {
                rotationY: 0,
                duration: 1,
                ease: 'easeOut',
                transformOrigin: 'center',
              }).to(
                card,
                {
                  filter: 'blur(0rem)',
                  duration: 0.5,
                  ease: 'easeOut', // Durée différente pour le flou
                },
                0
              ); // Démarre en même temps que la rotation
            }
          });
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(slide);
  });
}

export function videoControl() {
  const slidesVideo = document.querySelectorAll('.concept-v2_slide');

  const observerVideo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const background = entry.target.querySelector('.concept-v2_background');

        if (entry.isIntersecting) {
          gsap.to(background, {
            zIndex: 1,
            opacity: 1,
            duration: 0.5,
          });
        } else {
          gsap.to(background, {
            zIndex: 0,
            opacity: 0,
            duration: 0.25,
          });
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  slidesVideo.forEach((slide) => {
    observerVideo.observe(slide);
  });
}

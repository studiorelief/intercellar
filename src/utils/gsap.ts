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

/* export function radialTransition() {
  const slides: HTMLElement[] = gsap.utils.toArray('.concept-v2_slide');

  slides.forEach((slide) => {
    const layers = gsap.utils.toArray<HTMLElement>(slide.querySelectorAll('.concept-v2_layer'));

    layers.forEach((layer) => {
      // Créer un ScrollTrigger pour chaque layer
      ScrollTrigger.create({
        markers: true,
        trigger: slide,
        start: '0% 50%',
        end: '100% 50%',
        scrub: true,
        onUpdate: (self) => {
          const { progress } = self;
          let startSize, endSize;

          if (progress <= 0.5) {
            // De 0% à 50%, ouverture du radial
            startSize = '0%';
            endSize = `${progress * 2 * 100}%`;
          } else {
            // De 50% à 100%, fermeture du radial
            startSize = '0%';
            endSize = `${(1 - progress) * 2 * 100}%`;
          }

          applyRadialEffect(layer, startSize, endSize);
        },
      });
    });
  });
}

function applyRadialEffect(layer: Element, startSize: string, endSize: string) {
  gsap.to(layer, {
    background: `radial-gradient(circle, transparent ${startSize}, black ${endSize})`,
    duration: 0.1,
    ease: 'none',
  });
} */

export function radialTransition() {
  const layer = document.querySelector('.concept-v2_layer') as HTMLElement;
  const backgrounds = [
    'is-wine-spiritz',
    'is-nft-mint',
    'is-secure-storage',
    'is-exclusive-drop',
    'is-marketplace',
    'is-asset-redemption',
  ];

  function getRadialGradient(scrollY: number) {
    const height = window.innerHeight;
    const positionInVh = ((scrollY % height) / height) * 100;

    let colorStart, colorEnd;

    if (positionInVh <= 40) {
      colorStart = 'black';
      colorEnd = `rgba(0, 0, 0, ${1 - positionInVh / 40})`;
    } else {
      colorStart = `rgba(0, 0, 0, ${(positionInVh - 40) / 60})`;
      colorEnd = 'black';
    }

    return `radial-gradient(circle at center, ${colorStart} 0vh, ${colorEnd} 100vh)`;
  }

  window.addEventListener('scroll', () => {
    const { scrollY } = window;
    const currentSection = Math.floor(scrollY / window.innerHeight);

    const radialGradient = getRadialGradient(scrollY);
    gsap.to(layer, { background: radialGradient });

    if (currentSection < backgrounds.length) {
      backgrounds.forEach((bg) => {
        document.body.classList.remove(`concept-v2_background.${bg}`);
      });
      document.body.classList.add(`concept-v2_background.${backgrounds[currentSection]}`);
    }
  });
}

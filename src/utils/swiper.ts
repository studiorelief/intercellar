import 'swiper/css/bundle';

import gsap from 'gsap';
/* // @ts-expect-error : swiper bundle root */
import Swiper from 'swiper';
import { Autoplay, EffectFade, Mousewheel, Pagination } from 'swiper/modules';

export function swiperTeam() {
  new Swiper('.swiper.is-investors', {
    modules: [Autoplay],
    direction: 'horizontal',
    grabCursor: false,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 64, // variable
    centeredSlides: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: true,
      reverseDirection: false,
    },
    slideActiveClass: 'is-active',
    speed: 3000,
  });

  new Swiper('.swiper.is-partners', {
    modules: [Autoplay],
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 64, // variable
    centeredSlides: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    slideActiveClass: 'is-active',
    speed: 3000,
  });

  new Swiper('.swiper.is-press', {
    modules: [Autoplay],
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 64, // variable
    centeredSlides: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    slideActiveClass: 'is-active',
    speed: 3000,
  });
}

export function conceptAnimCardsV3(swiper: Swiper) {
  const activeSlide = swiper.slides[swiper.activeIndex]; // Obtenez la diapositive active
  const cards = activeSlide.querySelectorAll('.concept-v2_cards');
  gsap.set(cards, { rotationY: -180, filter: 'blur(0rem)' });
  cards.forEach((card: Element) => {
    const tl = gsap.timeline();

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
        ease: 'easeOut',
      },
      0
    );
  });
}

function updateRadialGradient(percent: number): void {
  const elements = document.querySelectorAll('.swiper-slide-active .concept_radial');
  elements.forEach((element) => {
    (
      element as HTMLElement
    ).style.backgroundImage = `radial-gradient(circle farthest-corner at 50% 50%, transparent 0%, black ${percent}%)`;
  });
}

export function swiperConceptRadial(): void {
  new Swiper('.swiper.is-concept', {
    modules: [Mousewheel, EffectFade, Pagination],
    direction: 'vertical',
    centeredSlides: true,
    slidesPerView: 1,
    speed: 1500,
    freeMode: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index: number, className: string): string => {
        const titles = [
          'Wine & Spirits',
          'NFT Mint',
          'Secured Storage',
          'Exclusive Drops',
          'Marketplace',
          'Asset Redemption',
        ];
        if (!titles[index] || titles[index].length === 0) {
          return ''; // Return an empty string to hide the bullet
        }
        return `<span class="${className}">${titles[index]}</span>`;
      },
    },
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: false,
    },

    on: {
      init: function (this: Swiper): void {
        updateRadialGradient(100);
      },
      slideChange: function (this: Swiper) {
        conceptAnimCardsV3(this);
        let startTime: number | null = null;
        const duration = 2000;

        const animate = (time: number) => {
          if (!startTime) startTime = time;
          const timeElapsed = time - startTime;
          const radialPercent = Math.min((timeElapsed / duration) * 100, 100);
          updateRadialGradient(radialPercent);

          if (timeElapsed < duration) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
    },
  });
}

export function swiperDrops() {
  new Swiper('.swiper.is-drops-v2', {
    modules: [Autoplay],
    direction: 'horizontal',
    grabCursor: false,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 64, // variable
    centeredSlides: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: true,
      reverseDirection: false,
    },
    slideActiveClass: 'is-active',
    speed: 6000,
  });
}

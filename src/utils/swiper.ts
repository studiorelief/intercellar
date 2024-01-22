import 'swiper/css/bundle';

import gsap from 'gsap';
/* // @ts-expect-error : swiper bundle root */
import Swiper from 'swiper';
import { Autoplay, EffectFade, Mousewheel, Pagination } from 'swiper/modules';

export function swiperTeam() {
  new Swiper('.swiper.is-investors', {
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

  new Swiper('.swiper.is-partners', {
    modules: [Autoplay],
    direction: 'horizontal',
    grabCursor: true,
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
    speed: 0,
  });

  new Swiper('.swiper.is-press', {
    modules: [Autoplay],
    direction: 'horizontal',
    grabCursor: true,
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
    speed: 0,
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

export function swiperConcept() {
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
      renderBullet: function (index, className) {
        const titles = [
          'Wine & Spiritz',
          'NFT & Mint',
          'Secure Storage',
          'Eclusive Drops',
          'Marketplace',
          'Asset Redemption',
        ];
        if (!titles[index] || titles[index].length === 0) {
          return ''; // Return an empty string to hide the bullet
        }
        return '<span class="' + className + '">' + titles[index] + '</span>';
      },
    },
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    on: {
      slideChange: function (this: Swiper) {
        conceptAnimCardsV3(this); // Appel de la fonction à chaque changement de diapositive
      },
    },
  });
}

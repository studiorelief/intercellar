import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperTeam() {
  new Swiper('.swiper.is-investors', {
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

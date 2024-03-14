import './index.css';

import { homeAnimCards, homeAnimEvent, homeAnimHeadingBig } from '$utils/gsap';
/* import { conceptAnimCards, videoControl } from '$utils/gsap'; */
import { loadScript, videoLoop } from '$utils/loadscript';
import { loadModelViewerScript } from '$utils/modalviewer';
import { swiperConceptRadial, swiperDrops, swiperTeam } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  // FS Attributes
  Promise.all([
    loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js'),
  ]);

  // Load 3D
  loadModelViewerScript();
  videoLoop();

  // Home - update v2
  if (window.location.pathname === '/') {
    homeAnimCards();
    swiperDrops();
    homeAnimEvent();
    homeAnimHeadingBig();
  }

  if (window.location.href.includes('/team')) {
    swiperTeam();
  }
  if (window.location.href.includes('/concept')) {
    swiperConceptRadial();
  }
});
